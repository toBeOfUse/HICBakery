import React, { useState } from 'react';
import Link from "next/link";
import styles from "../styles/category-suggester.module.css";

export default function CategorySuggester({ suggestions }) {
    const [categoryIndex, setCategoryIndex] = useState(0);
    return <div className={styles.container}>
        <h3>Suggestions from related categories:</h3>
        <div className={styles.suggestionsContainer}>
            <div>
                {suggestions.map((s, i) => (
                    <p className={styles.category}
                        style={{ backgroundColor: i == categoryIndex ? 'lightcyan' : 'unset' }}
                        key={s[0].id}
                        onMouseEnter={() => setCategoryIndex(i)}>
                        {s[0].category_name}
                    </p>))}
            </div>
            <div>
                {suggestions[categoryIndex].map(p => (
                    <Link href={`/productInfo?product=${p.id}`} key={p.id} className={styles.littleProduct}>
                        <img src={"/" + p.photo_file_name} alt={p.name} />
                        <span>{p.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
}