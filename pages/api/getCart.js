import db from "../../components/db";

export default function handler(req, res) {
  const cartRows = db.prepare("select * from carts").all();
  const cartItems = [];
  for (const row of cartRows) {
    const product = db
      .prepare("select * from products where id=?")
      .get(row.product_id);
    cartItems.push({
      quantity_in_cart: row.quantity,
      product,
    });
  }
  res.json(cartItems);
}
