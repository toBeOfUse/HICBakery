import styles from "../styles/search.module.css"
import FilterBox from "../components/filter-box.jsx"
import Header from "../components/Header.jsx"
import ProductSearchResultItem from "../components/product-search-result-item.jsx"
import Footer from "../components/footer"
import { useEffect, useState } from "react";
import { useRouter } from "next/router"

export default function Search() {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [activeFilters, setActiveFilters] = useState([]);
    const [currentSearch, setCurrentSearch] = useState("");

    function doSearch(searchInput) {
        let encodedFilters = "";
        activeFilters.forEach(category => {
            encodedFilters += `&category_filter=${category}`;
        });
        setCurrentSearch(searchInput);
        fetch(`/api/search?keyword=${searchInput}` + encodedFilters)
            .then(res => {
                if (res.ok) {
                    return res.json().then(rows => setSearchResults(rows));
                } else {
                    return res.json().then(error => {
                        console.log("Error:", error);
                        setSearchResults([]);
                    });
                }
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
    }

    const router = useRouter();
    useEffect(() => {
        if (router.query.keyword) {
            setSearchInput(router.query.keyword);
            // setSearchInput does not immediately affect the searchInput
            // variable (it changes when Search() is called again and this
            // component is re-rendered), so the new search input must be passed
            // to doSearch directly
            doSearch(router.query.keyword);
        }
    }, [router.query.keyword]);

    useEffect(()=>{
        console.log('Active filters update!', activeFilters);
    }, [activeFilters]);

    function addFilter(header, name, clicked) {
        setActiveFilters(prevState => {
            let updatedFilters = [...prevState];
            if (clicked) {
                if (!updatedFilters.includes(name)) {
                    updatedFilters.push(name);
                }
            }
            else {
                if (updatedFilters.includes(name)) {
                    updatedFilters = updatedFilters.filter(filter => filter !== name)
                }
            }
            return updatedFilters;
        });
    }

    return (
        <>
        <Header searchInput={searchInput} doSearch={doSearch} setSearchInput={setSearchInput} collapsed={true} />
        <main id={styles.SearchContainer}>
            <FilterBox currentSearch={currentSearch} addFilter={addFilter} />
            <section id={styles.SearchResultContainer}>
                {searchResults.map((product, index) =>
                    <ProductSearchResultItem key={index} product={product} />
                )}
            </section>
        </main>
        <Footer/>
        </>
    )
}
