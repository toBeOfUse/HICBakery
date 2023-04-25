import Head from "next/head";
import styles from "../styles/search.module.css"
import FilterBox from "../components/filter-box.jsx"
import Header from "../components/header.jsx"
import ProductSearchResultItem from "../components/product-search-result-item.jsx"
import Footer from "../components/footer"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Flipper, Flipped } from 'react-flip-toolkit';
import { SearchFilterContext, useFilters } from "../components/filter-context";

export default function Search() {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [activeFilters, setActiveFilters] = useState([]);
    const [currentSearch, setCurrentSearch] = useState("");

    function doSearch(searchInput) {
        if (!router.isReady) {
            return;
        }
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

    function editFilters(name, adding) {
        setActiveFilters(prevState => {
            let updatedFilters = [...prevState];
            if (adding) {
                if (!updatedFilters.includes(name)) {
                    updatedFilters.push(name);
                }
            } else {
                updatedFilters = updatedFilters.filter(filter => filter !== name)
            }
            return updatedFilters;
        });
    }

    const fadeLengthMS = 500;

    const fadeIn = (el) => {
        el.style.transition = "";
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = `opacity ${fadeLengthMS}ms`;
            el.style.opacity = 1;
        }, 1);
    }

    const fadeOut = (el, i, done) => {
        el.style.transition = "";
        el.style.opacity = 1;
        setTimeout(() => {
            el.style.transition = `opacity ${fadeLengthMS}ms`;
            el.style.opacity = 0;
        }, 1);
        setTimeout(done, fadeLengthMS);
    }

    return (
        <>
            <Head>
                <title>{currentSearch ? currentSearch + " - Search Results" : "Search Results"}</title>
            </Head>
            <Header searchInput={searchInput} doSearch={doSearch} setSearchInput={setSearchInput} collapsed={true} />
            <main id={styles.SearchContainer}>
                <SearchFilterContext.Provider value={[activeFilters, editFilters]}>
                    <FilterBox currentSearch={currentSearch} />
                </SearchFilterContext.Provider>
                <Flipper flipKey={router.isReady ? searchResults.map(s => s.id).join(',') : ""}
                    element="section" className={styles.searchResultContainer}>
                    {searchResults.map((product) =>
                        <Flipped flipId={product.id} key={product.id} onAppear={fadeIn} onExit={fadeOut}>
                            <ProductSearchResultItem product={product} />
                        </Flipped>
                    )}
                </Flipper>
            </main>
            <Footer />
        </>
    )
}
