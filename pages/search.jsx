import styles from "../styles/search.module.css"
import FilterBox from "../components/filter-box.jsx"
import Header from "../components/Header.jsx"
import ProductSearchResultItem from "../components/product-search-result-item.jsx"
import Footer from "../components/footer"

export default function Search() {
    const products = [
        {
            name: "cupcake",
            price: 10.99,
            desc: "This is a cupcake"
        },
        {
            name: "cupcakeTwo",
            price: 10.88,
            desc: "This is another cupcake"
        },
        {
            name: "cupcakeThree",
            price: 11.99,
            desc: "This is also cupcake"
        }
    ]
    return (
        <>
        <Header collapsed={true} />
        <main id={styles.SearchContainer}>
            <FilterBox />
            <section id={styles.SearchResultContainer}>
                {products.map((product, index) =>
                    <ProductSearchResultItem key={index} product={product} />
                )};
            </section>
        </main>
        <Footer/>
        </>
    )
}
