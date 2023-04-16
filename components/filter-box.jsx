import styles from "../styles/search.module.css"
import CollapsibleList from "./collapsible-list";

export default function FilterBox() {
    const typeItems = ['Cupcakes', 'Cookies', 'Cakes'];
    const flavorItems = ['Chocolate', 'Vanilla', 'Caramel', 'Coconut'];
    const occasionItems = ['Birthday', 'Celebration', 'Casual'];

    return (
        <div id={styles.Container}>
            <h1 id={styles.ResultsDisplay}>Results for: Vanilla</h1>
            <ul id={styles.Categories}>
                <CollapsibleList header="Type" items={typeItems} />
                <CollapsibleList header="Flavor" items={flavorItems} />
                <CollapsibleList header="Occasion" items={occasionItems} />
            </ul>
        </div>
    );
}
