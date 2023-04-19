import styles from "../styles/search.module.css"
import Image from 'next/image'

export default function ProductSearchResultItem({ product }) {
    return (
        <div className={styles.searchResult}>
            <Image className={styles.productImage} width={200} height={200} src="/splash_cupcake.jpg" alt="cupcake"/>
            <h1 className={styles.productTitle}>{product["name"]}</h1>
            <p className={styles.productDesc}>{product["desc"]}</p>
            <i className={styles.productPrice}>${product["price"]}</i>
        </div>
    );
}
