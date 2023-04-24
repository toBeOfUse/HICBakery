import { useMemo } from "react";
import { useCart } from "./CartProvider";
import styles from "./header.module.css";

import Link from "next/link";

const linkStyle = { style: { /*textDecoration: "underline"*/ } };

export default function Header(props) {
    const [cart, _] = useCart();
    const cartSize = useMemo(() => cart.reduce((acc, val) => acc + val.quantity_in_cart, 0), [cart]);
    return <div className={
        [styles.container, props.collapsed ? styles.header : styles.splash].join(' ')
    }>
        <div className={styles.title}>
            <Link href="/">
                <span>Cupcake{props.collapsed ? " " : <br />}Corner</span>
            </Link>
        </div>
        <div className={styles.actionBar}>
            <Link {...linkStyle} href="/about">About</Link>
            <div className={styles.inputContainer}>
                <input value={props.searchInput} onChange={(e)=> props.setSearchInput(e.target.value)} type="text" placeholder="Search our products..." />
                <button id={styles.SearchButton} onClick={props.doSearch}>🔎</button>
            </div>
            <Link {...linkStyle} href="/cart">Your Cart{cartSize > 0 ? ` (${cartSize})` : ''}</Link>
        </div>
    </div>;
}
