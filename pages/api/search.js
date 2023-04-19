import db from "../../components/db.js";

export default function handler(req, res) {
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
