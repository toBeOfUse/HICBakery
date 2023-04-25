import styles from "../styles/checkout.module.css";

export default function FormField({ label, placeholder, icon, style, hideLabel, pattern, warning }) {
    // https://www.30secondsofcode.org/js/s/slugify/
    const id = label
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return <label style={{ width: "100%", ...style }}>
        {!hideLabel && <span style={{ fontSize: "small", display: "block" }}>
            {label}:
        </span>}
        {icon ? <i class={`fa ${icon}`} /> : null}
        <input pattern={pattern} required id={id} placeholder={placeholder} style={{ width: "100%" }} />
        <span className={styles.validationWarning}>{warning ?? "Required"}</span>
    </label>
}