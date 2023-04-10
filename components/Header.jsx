import styles from "./header.module.css";

import Link from "next/link";

export default function Header(props) {
    return <div className={
        [styles.container, props.collapsed ? styles.header : styles.splash].join(' ')
    }>
        <div className={styles.title}>
            <div className={styles.titleText}>
                <span>Cupcake Corner</span>
            </div>
        </div>
        <div className={styles.actionBar}>
            <Link href="/about">About</Link>
            <div className={styles.inputContainer}>
                <input type="text" placeholder="Search our products..." />
            </div>
            <Link href="/cart">Your Cart</Link>
        </div>
    </div>;
}
