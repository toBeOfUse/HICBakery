import db from "../../components/db.js";

export default function handler(req, res) {
    // URL:
    // http://localhost:3000/api/search?keyword=cake
    // RESULT:
        // req.query.keyword == "cake"
    // so if you did http://localhost:3000/api/search?keyword=apple&category_filter=cookies&category_filter=birthday)
    // you would get req.query.keyword == "apple" && req.query.category_filters == ['cookies', 'birthday']
    const searchForName = req.query.keyword;
    const categoryFiltersArray = Array.isArray(req.query.category_filter)
        ? req.query.category_filter
        : req.query.category_filter ? [req.query.category_filter] : [];
    const categoryFilters = categoryFiltersArray && categoryFiltersArray.length
        ? `(${categoryFiltersArray.map(category => `'${category}'`).join(', ')})`
        : '';

   let query = `SELECT DISTINCT id, name, description, price, photo_file_name, ingredients
                 FROM products
                 INNER JOIN product_categories ON products.id = product_categories.product_id`;

    if (searchForName) {
        query += ` where name LIKE ?`;
    }

    if (categoryFilters) {
        // if we already used WHERE once above, need to use AND
        query += ` ${
        searchForName ? "AND" : "WHERE"
        } category_name IN ${categoryFilters}`;
    }
    const results = searchForName
        ? db.prepare(query).all("%" + searchForName + "%")
        : db.prepare(query).all();
    res.json(results);
}
