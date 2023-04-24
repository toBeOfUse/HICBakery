import styles from "../styles/search.module.css"
import Link from "next/link";
import Image from 'next/image'

export default function ProductSearchResultItem({ product }) {
    return (
        <div className={styles.searchResult}>
            <Link href={`/productInfo?product=${product.id}`}>
                <Image className={styles.productImage} width={200} height={200} src={'/' + product["photo_file_name"]} alt="cupcake" />
                <h1 className={styles.productTitle}>{product["name"]}</h1>
            </Link>
            <p className={styles.productDesc}>{product["description"]}</p>
            <i className={styles.productPrice}>${product["price"] / 100}</i>
        </div>
    );
}
