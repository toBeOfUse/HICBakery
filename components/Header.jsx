import styles from "./header.module.css";

import Link from "next/link";

const linkStyle = { style: { /*textDecoration: "underline"*/ } };

export default function Header(props) {
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
                <input type="text" placeholder="Search our products..." />
            </div>
            <Link {...linkStyle} href="/cart">Your Cart</Link>
        </div>
    </div>;
}
