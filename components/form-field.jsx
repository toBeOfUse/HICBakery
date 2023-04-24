export default function FormField({ label, placeholder, icon, style }) {
    // https://www.30secondsofcode.org/js/s/slugify/
    const id = label
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return <label style={{ width: "100%", ...style }}>
        <span style={{ fontSize: "small", display: "block" }}>
            {label}:
        </span>
        {icon ? <i class={`fa ${icon}`} /> : null}
        <input id={id} placeholder={placeholder} style={{ width: "100%" }} />
    </label>
}