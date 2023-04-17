import styles from "../styles/search.module.css"
import Image from 'next/image'

export default function ProductSearchResultItem({ name, desc, price }) {
    return (
        <div className={styles.searchResult}>
            <Image width={100} height={100} src="/public/splash_cupcake.jpg" alt="cupcake"/>
            <h1>test name</h1>
            <p>This is a test description hello there! I am feeling very well todday how are you!!</p>
            <p>$24.90</p>
        </div>
    );
}
