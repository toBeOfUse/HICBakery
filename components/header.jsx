import { useMemo } from "react";
import { useCart } from "./cart-provider";
import styles from "./header.module.css";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Link from "next/link";

export default function Header(props) {
    const router = useRouter();
    const [cart, _] = useCart();
    const cartSize = useMemo(() => cart.reduce((acc, val) => acc + val.quantity_in_cart, 0), [cart]);
    const [searchInput, setSearchInput] = useState(props.query ? props.query.keyword : "");

    function handleKeyDown(e) {
        if (e.key == 'Enter')
            handleClick();
    }

    function handleClick() {
        router.push(`/search?keyword=${searchInput}`);
    };

    function handleChange(e) {
        setSearchInput(e.target.value);
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
            <Link href="/about">About</Link>
            <div className={styles.inputContainer}>
                <input
                    onKeyDown={handleKeyDown}
                    value={searchInput}
                    onChange={handleChange} type="text" placeholder="Search our products..." />
                <button id={styles.SearchButton} onClick={handleClick}>🔎</button>
            </div>
            <Link href="/cart">Your Cart{cartSize > 0 ? ` (${cartSize})` : ''}</Link>
        </div>
    </div>;
}
