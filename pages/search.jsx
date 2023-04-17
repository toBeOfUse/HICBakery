import styles from "../styles/search.module.css"
import FilterBox from "../components/filter-box.jsx"
import Header from "../components/Header.jsx"
import ProductSearchResultItem from "../components/product-search-result-item.jsx"

export default function Search() {
    return (
        <>
        <Header />
        <main id={styles.SearchContainer}>
            <FilterBox />
            <section id={styles.SearchResultContainer}>
                <ProductSearchResultItem />
                <ProductSearchResultItem />
                <ProductSearchResultItem />
                <ProductSearchResultItem />
                <ProductSearchResultItem />
                <ProductSearchResultItem />
            </section>
        </main>
        </>
    )
}
