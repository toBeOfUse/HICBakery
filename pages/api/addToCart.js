import db from "../../components/db.js";

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const product_id = body.product_id;
  const quantity = body.quantity;
  if (product_id === undefined) {
    res.status(400).send("product_id missing :(");
  } else if (quantity === undefined) {
    res.status(400).send("quantity missing :(");
  } else {
    const existing = db
      .prepare("select * from carts where product_id=?")
      .get(product_id);
    if (existing) {
      db.prepare("update carts set quantity=? where product_id=?").run(
        existing.quantity + quantity,
        product_id
      );
    } else {
      db.prepare("insert into carts (product_id, quantity) values (?, ?)").run(
        product_id,
        quantity
      );
    }
    res.status(200).send("added item");
  }
}
