import styles from "../styles/search.module.css"

export default function FilterBox() {
    return (
        <div id={styles.Container}>
            <h1 id={styles.ResultsDisplay}>Results for: Vanilla</h1>
            <ul id={styles.Categories}>
                <li className={styles.category}>
                    <h1 className={styles.categoryHeader}>Type</h1>
                    <ul className={styles.options}>
                        <li className={styles.option}>Cupcakes</li>
                        <li className={styles.option}>Cookies</li>
                        <li className={styles.option}>Cakes</li>
                    </ul>
                </li>
                <li className={styles.category}>
                    <h1 className={styles.categoryHeader}>Flavor</h1>
                    <ul className={styles.options}>
                        <li className={styles.option}>Chocolate</li>
                        <li className={styles.option}>Vanilla</li>
                        <li className={styles.option}>Caramel</li>
                    </ul>
                </li>
                <li className={styles.category}>
                    <h1 className={styles.categoryHeader}>Occasion</h1>
                    <ul className={styles.options}>
                        <li className={styles.option}>Birthday</li>
                        <li className={styles.option}>Celebration</li>
                        <li className={styles.option}>Casual</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
