import db from "../../components/db.js";

export default function handler(req, res) {
  // URL:
  // https://localhost:3000/api/search?keyword=cake
  // RESULT:
  // req.query.keyword == "cake"
  // so if you did https://localhost:3000/api/search?keyword=apple&category_filter=pastry
  // you would get req.query.keyword == "apple" && req.query.category_filter == "pastry"
  const searchForName = req.query.keyword;
  if (searchForName) {
    const results = db
      .prepare("select * from products where name like ?;")
      .all("%" + searchForName + "%");
    res.json(results);
  } else {
    res.status(404).send("keyword missing");
  }
}
