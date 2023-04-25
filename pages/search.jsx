import Head from "next/head";
import styles from "../styles/search.module.css"
import FilterBox from "../components/filter-box.jsx"
import Header from "../components/header.jsx"
import ProductSearchResultItem from "../components/product-search-result-item.jsx"
import Footer from "../components/footer"
import { useEffect, useState } from "react";
import { Flipper, Flipped } from 'react-flip-toolkit';
import { SearchFilterContext } from "../components/filter-context";

export function getServerSideProps(context) {
    // because useRouter() does not have data right away, causing calls to
    // /api/search with missing keywords and filters, but this does
    return { props: { query: context.query, key: JSON.stringify(context.query) } };
}

function ensureArray(arrayOrItem) {
    if (!arrayOrItem) {
        return [];
    } else if (Array.isArray(arrayOrItem)) {
        return arrayOrItem;
    } else {
        return [arrayOrItem];
    }
}

export default function Search({ query }) {
    const [searchInput, setSearchInput] = useState(query.keyword || "");
    const [searchResults, setSearchResults] = useState([]);
    const [activeFilters, setActiveFilters] = useState(ensureArray(query.category_filter));
    const [currentSearch, setCurrentSearch] = useState(query.keyword || "");

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

    useEffect(() => {
        console.log(activeFilters);
        doSearch(currentSearch || "");
    }, [currentSearch, activeFilters]);

    function editFilters(name, adding) {
        setActiveFilters(prevState => adding ?
            [...prevState, name] :
            prevState.filter(f => f !== name)
        );
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
                <Flipper flipKey={searchResults.map(s => s.id).join(',')}
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
