import styles from "../styles/search.module.css"
import CollapsibleList from "./collapsible-list";

export default function FilterBox({ currentSearch }) {
    const typeItems = ['cupcakes', 'cookies', 'cakes'];
    const flavorItems = ['chocolate', 'vanilla', 'caramel', 'coconut'];
    const occasionItems = ['birthday', 'celebration', 'casual'];

    return (
        <div id={styles.FilterContainer}>
            <h1 id={styles.ResultsDisplay}>Results for: <span>{currentSearch}</span></h1>
            <ul id={styles.Categories}>
                <CollapsibleList header="Type" items={typeItems} />
                <CollapsibleList header="Flavor" items={flavorItems} />
                <CollapsibleList header="Occasion" items={occasionItems} />
            </ul>
        </div>
    );
}
