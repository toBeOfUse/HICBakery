import Link from "next/link";
import Header from "../components/Header";
import CartItem from "../components/cart-item";
import { formatPrice } from "../utilities/format";
import styles from "../styles/cart.module.css";

export async function getServerSideProps() {
  const db = (await import("../components/db")).default;
  const cartRows = db.prepare("select * from carts").all();
  const cartItems = [];
  let totalPrice = 0;
  for (const row of cartRows) {
    const product = db.prepare("select * from products where id=?").get(row.product_id);
    cartItems.push({
      quantity_in_cart: row.quantity,
      product
    });
    totalPrice += product.price;
  }
  return {
    props: { cartItems, totalPrice }
  };
}


const Cart = ({ cartItems, totalPrice }) => {
  return (
    <>
      <Header collapsed={true} />

      <div className={styles.container}>

        {/*Row for cart compoent and price compoent */}
        <div>
          <p className={styles.header}> Your Cart</p>
          <div className={styles.primaryContentContainer}>

            {/*Cart containing row - left half of the page*/}
            <div>

              {cartItems.map((item, i) => <CartItem {...item} key={i} />)}

            </div>
            {/*End left half of page */}

            {/*Begin right half of page */}

            <div className={"w3-card-2 w3-center w3-round-medium " + styles.priceContainer}>
              <p> Total Price: ${formatPrice(totalPrice)}</p>
              <div>
                <Link href="/checkout" className="bakery-blue" style={{ padding: 12 }}>
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* End page content */}
      </div>
    </>
  )

}

export default Cart;
