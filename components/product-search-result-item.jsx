import styles from "../styles/search.module.css"
import Image from 'next/image'

export default function ProductSearchResultItem({ name, desc, price }) {
    return (
        <div className={styles.searchResult}>
            <Image width={100} height={100} src="/splash_cupcake.jpg" alt="cupcake"/>
            <h1 className={styles.resultTitle}>test name</h1>
            <p className={styles.resultDesc}>This is a test description hello there! I am a test description!!!!</p>
            <i className={styles.resultPrice}>$24.90</i>
        </div>
    );
}
