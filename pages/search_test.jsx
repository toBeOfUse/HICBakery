import { useState } from "react";

export default function SearchTestPage() {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const doSearch = () => {
        // compose a URL from state variables:
        const categories = ['cakes', 'chocolate'];
        let encodedCategories = "";
        categories.forEach(category => {
            encodedCategories += `&category_filter=${category}`;
        });
        fetch(`/api/search?keyword=${searchInput}` + encodedCategories)
            .then(res => {
                if (res.ok) {
                    return res.json().then(rows => setSearchResults(rows));
                } else {
                    return res.json().then(error => {
                        setSearchResults([]);
                    });
                }
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
    };

    return <>
        <input value={searchInput} onChange={e => setSearchInput(e.target.value)} />
        <button onClick={doSearch}>Search</button>
        <p>Search results:</p>
        {/* Turn the results into search result components. (This just turns them into strings) */}
        <pre>{searchResults.map(r => JSON.stringify(r, null, 4)).join("\n")}</pre>
    </>
}
