import styles from "../styles/search.module.css"
import CollapsibleList from "./collapsible-list";

export default function FilterBox({addFilter}) {
    const typeItems = ['Cupcakes', 'Cookies', 'Cakes'];
    const flavorItems = ['Chocolate', 'Vanilla', 'Caramel', 'Coconut'];
    const occasionItems = ['Birthday', 'Celebration', 'Casual'];

    return (
        <div id={styles.FilterContainer}>
            <h1 id={styles.ResultsDisplay}>Results for: Vanilla</h1>
            <ul id={styles.Categories}>
                <CollapsibleList clickAction={addFilter} header="Type" items={typeItems} />
                <CollapsibleList clickAction={addFilter} header="Flavor" items={flavorItems} />
                <CollapsibleList clickAction={addFilter} header="Occasion" items={occasionItems} />
            </ul>
        </div>
    );
}
