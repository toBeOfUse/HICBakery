import db from "../../components/db.js";

export default function handler(req, res) {
    // URL:
    // http://localhost:3000/api/search?keyword=cake
    // RESULT:
        // req.query.keyword == "cake"
    // so if you did http://localhost:3000/api/search?keyword=apple&category_filter=cookies&category_filter=birthday)
    // you would get req.query.keyword == "apple" && req.query.category_filters == ['cookies', 'birthday']
    const searchForName = req.query.keyword;
    const categoryFiltersArray = req.query.category_filter;
    const categoryFilters = categoryFiltersArray && categoryFiltersArray.length
        ? `(${categoryFiltersArray.map(category => `'${category}'`).join(', ')})`
        : '';
    if (searchForName) {
        let query = `SELECT distinct id, name, description, price, photo_file_name, ingredients
                     FROM products natural join product_categories WHERE name LIKE ?`;
        if (categoryFilters) {
            query += ` AND (category_name in ${categoryFilters})`;
        }
        const results = db.prepare(query).all("%" + searchForName + "%");
        res.json(results);
    } else {
        res.status(404).send("keyword missing");
    }
}
