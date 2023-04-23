import styles from "./header.module.css";

import Link from "next/link";

const linkStyle = { style: { /*textDecoration: "underline"*/ } };

export default function Header(props) {
    return <div className={
        [styles.container, props.collapsed ? styles.header : styles.splash].join(' ')
    }>
        <div className={styles.title}>
            <span>Cupcake{props.collapsed ? " " : <br />}Corner</span>
        </div>
        <div className={styles.actionBar}>
            <Link {...linkStyle} href="/about">About</Link>
            <div className={styles.inputContainer}>
                <input value={props.searchInput} onChange={(e)=> props.setSearchInput(e.target.value)} type="text" placeholder="Search our products..." />
                <button onClick={props.doSearch}>Search</button>
            </div>
            <Link {...linkStyle} href="/cart">Your Cart</Link>
        </div>
    </div>;
}
