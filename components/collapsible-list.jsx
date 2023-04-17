import { useState } from "react";
import styles from "../styles/search.module.css"

export default function CollapsibleList({header, items}) {
    const [collapsed, setCollapsed] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState([]);
    function toggleCollapse() {
        setCollapsed(!collapsed);
    }
    function onOptionClick(index) {
        if (!selectedOptions.includes(index)) {
            setSelectedOptions([...selectedOptions, index]);
        } else {
            setSelectedOptions(selectedOptions.filter(o => o != index));
        }
    }
    return (
        <li className={styles.category}>
            <h1 onClick={toggleCollapse} className={styles.categoryHeader}>{header}</h1>
            <ul className={`${styles.options} ${collapsed ? styles.collapsed : styles.expanded}`}>
                {!collapsed && items.map((item, index)=>
                    <li key={index}
                        onClick={()=>onOptionClick(index)}
                        className={`${styles.option} ${selectedOptions.includes(index) ? styles.selected : null}`}>
                        {item}
                    </li>
                )}
            </ul>
        </li>
    );
}
