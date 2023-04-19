import styles from "../styles/search.module.css"
import FilterBox from "../components/filter-box.jsx"
import Header from "../components/Header.jsx"
import ProductSearchResultItem from "../components/product-search-result-item.jsx"
import Footer from "../components/footer"
import { useEffect, useState } from "react";

export default function Search() {
    const [activeFilters, setActiveFilters] = useState({
        type: [],
        flavor: [],
        occasion: []
    });

    useEffect(()=>{
        console.log('Active filters update!', activeFilters);
    }, [activeFilters]);

    function onFilterClick(header, name, clicked) {
        setActiveFilters((prevState)=>{
            const updatedFilters = {...prevState};
            if (clicked) {
                if (!updatedFilters[header].includes(name)) {
                    updatedFilters[header].push(name);
                }
            } else {
                updatedFilters[header] = updatedFilters[header].filter((item) =>
                    item !== name
                );
            }
            return updatedFilters;
        });
    }

    const products = [
        {
            name: "cupcake",
            price: 10.99,
            desc: "This is a cupcake",
            imageSrc: "/splash_cupcake.jpg"
        },
        {
            name: "cupcakeTwo",
            price: 10.88,
            desc: "This is another cupcake",
            imageSrc: "/splash_cupcake.jpg"
        },
        {
            name: "cupcakeThree",
            price: 11.99,
            desc: "This is also cupcake",
            imageSrc: "/splash_cupcake.jpg"
        }
    ]
    return (
        <>
        <Header collapsed={true} />
        <main id={styles.SearchContainer}>
            <FilterBox onFilterClick={onFilterClick} />
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
