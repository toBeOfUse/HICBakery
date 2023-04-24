import { useMemo } from "react";
import { useCart } from "./CartProvider";
import styles from "./header.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

import Link from "next/link";

const linkStyle = { style: { /*textDecoration: "underline"*/ } };

export default function Header(props) {
    const router = useRouter();
    const [cart, _] = useCart();
    const cartSize = useMemo(() => cart.reduce((acc, val) => acc + val.quantity_in_cart, 0), [cart]);
    const [searchInput, setSearchInput] = useState("");

    function handleKeyDown(e) {
        if (e.key == 'Enter')
            handleClick();
    }

    function handleClick() {
        if (router.pathname !== '/search') {
            router.push(`/search?keyword=${searchInput}`);
        } else {
            props.doSearch();
        }
    };

    function handleChange(e) {
        if (router.pathname !== '/search') {
            setSearchInput(e.target.value);
        } else {
            props.setSearchInput(e.target.value);
        }
    }

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
                <input onKeyDown={handleKeyDown} value={router.pathname !== "/search" ? searchInput : props.searchInput} onChange={handleChange} type="text" placeholder="Search our products..." />
                <button id={styles.SearchButton} onClick={handleClick}>🔎</button>
            </div>
            <Link {...linkStyle} href="/cart">Your Cart{cartSize > 0 ? ` (${cartSize})` : ''}</Link>
        </div>
    </div>;
}
