import { useState, useEffect } from "react";
import styles from "../styles/search.module.css"
import { useFilters } from "./filter-context.js";

export default function CollapsibleList({ header, items }) {
    const [selectedOptions, editFilters] = useFilters();
    console.log("so", selectedOptions);
    console.log("i", items);
    const [collapsed, setCollapsed] = useState(true);
    useEffect(() => {
        if (collapsed && selectedOptions) {
            setCollapsed(!selectedOptions.some(s => items.includes(s)));
        }
    }, [selectedOptions, items]);
    function toggleCollapse() {
        setCollapsed(!collapsed);
    }
    function onOptionClick(index, name) {
        if (!selectedOptions.includes(index)) {
            editFilters(name.toLowerCase(), true);
        } else {
            editFilters(name.toLowerCase(), false);
        }
    }
    return (
        <li className={styles.category}>
            <h1 onClick={toggleCollapse} className={styles.categoryHeader}>{header}</h1>
            <ul className={`${styles.options} ${collapsed ? styles.collapsed : styles.expanded}`}>
                {!collapsed && items.map((item, index) =>
                    <li key={index}
                        onClick={() => onOptionClick(index, item)}
                        className={`${styles.option} ${selectedOptions.includes(item) ? styles.selected : null}`}>
                        {item}
                    </li>
                )}
            </ul>
        </li>
    );
}
