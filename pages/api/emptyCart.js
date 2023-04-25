import db from "../../components/db.js";

export default function handler(req, res) {
  if (req.method == "PUT") {
    db.prepare("delete from carts").run();
    res.status(200).send("cart emptied");
  } else res.status(405).send("method not allowed");
}
