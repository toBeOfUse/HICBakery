import Head from "next/head";
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
        setCurrentSearch(searchInput);
        const params = new URLSearchParams();
        if (searchInput) {
            params.append("keyword", searchInput);
        }
        for (const filter of activeFilters) {
            params.append("category_filter", filter);
        }
        fetch(`/api/search?${params.toString()}`)
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
        let newFilter = router.query.category_filter;
        if (newFilter) {
            if (!Array.isArray(newFilter)) {
                newFilter = [newFilter];
            }
            setActiveFilters(af => af.concat(newFilter));
        }
    }, [router.query.category_filter]);

    useEffect(() => {
        if (router.query.keyword || activeFilters.length) {
            setSearchInput(router.query.keyword);
            // setSearchInput does not immediately affect the searchInput
            // variable (it changes when Search() is called again and this
            // component is re-rendered), so the new search input must be passed
            // to doSearch directly
            doSearch(router.query.keyword);
        } else {
            doSearch("");
        }
    }, [router.query.keyword, activeFilters]);

    useEffect(() => {
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
            <Head>
                <title>{currentSearch ? currentSearch + " - " : ""}Search Results</title>
            </Head>
            <Header searchInput={searchInput} doSearch={doSearch} setSearchInput={setSearchInput} collapsed={true} />
            <main id={styles.SearchContainer}>
                <FilterBox currentSearch={currentSearch} addFilter={addFilter} />
                <section id={styles.SearchResultContainer}>
                    {searchResults.map((product, index) =>
                        <ProductSearchResultItem key={index} product={product} />
                    )}
                </section>
            </main>
            <Footer />
        </>
    )
}
