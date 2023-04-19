import { useState } from "react";

export default function SearchTestPage() {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState("");

    const doSearch = () => {
        fetch("/api/search?keyword=" + searchInput).then(
            res => res.json().then(
                rows => setSearchResults(JSON.stringify(rows, null, 4))
            )
        );
    };

    return <>
        <input value={searchInput} onChange={e => setSearchInput(e.target.value)} />
        <button onClick={doSearch}>Search</button>
        <p>Search results:</p>
        <pre>{searchResults}</pre>
    </>
}
