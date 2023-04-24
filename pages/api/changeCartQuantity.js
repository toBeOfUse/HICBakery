import db from "../../components/db.js";

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const product_id = body.product_id;
  const quantity = body.quantity;
  if (quantity > 0) {
    db.prepare("update carts set quantity=? where product_id=?").run(
      quantity,
      product_id
    );
  } else if (quantity == 0) {
    db.prepare("delete from carts where product_id=?").run(product_id);
  }
  res.status(200).send("updated :]");
}
