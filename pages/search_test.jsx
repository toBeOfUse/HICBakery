import { useState } from "react";

export default function SearchTestPage() {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const doSearch = () => {
        // compose a URL from state variables:
        fetch("/api/search?keyword=" + searchInput).then(
            // get the response and store it:
            res => res.json().then(
                rows => setSearchResults(rows)
            )
        );
    };

    return <>
        <input value={searchInput} onChange={e => setSearchInput(e.target.value)} />
        <button onClick={doSearch}>Search</button>
        <p>Search results:</p>
        {/* Turn the results into search result components. (This just turns them into strings) */}
        <pre>{searchResults.map(r => JSON.stringify(r, null, 4)).join("\n")}</pre>
    </>
}
