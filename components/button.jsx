import styles from "../styles/button.module.css";
export default function Button({ style, onClick, children }) {
    return <button className={styles.button} onClick={onClick} style={style}>
        {children}
    </button>;
}
