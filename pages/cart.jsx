import Header from "../components/Header";
import CartItem from "../components/cart-item";

export async function getServerSideProps() {
  const db = (await import("../components/db")).default;
  const cartRows = db.prepare("select * from carts").all();
  const cartItems = [];
  for (const row of cartRows) {
    const product = db.prepare("select * from products where id=?").get(row.product_id);
    cartItems.push({
      quantity_in_cart: row.quantity,
      product
    });
  }
  return {
    props: { cartItems }
  };
}


const Cart = ({ cartItems }) => {
  return (
    <>
      <Header collapsed={true} />

      {/* Add a background color and large text to the whole page */}
      <div className="w3-white w3-large">

        {/*Row for cart compoent and price compoent */}
        <div className="w3-container">
          <div className="w3-row">

            {/*Cart containing row - left half of the page*/}
            <div className="w3-half w3-container">
              <div className="w3-padding-16"></div>
              <span className="w3-cell w3-wide bakery-blue w3-xxlarge w3-border-left"> Your Cart</span>

              {cartItems.map((item, i) => <CartItem {...item} key={i} />)}

            </div>
            {/*End left half of page */}

            {/*Begin right half of page */}

            <div className="w3-cell w3-half w3-padding-64">
              <div className="w3-padding-32"></div>
              <div className="w3-card-2 w3-center w3-margin-right w3-margin-left w3-padding-64 w3-round-medium">
                <div className="w3-padding-16 w3-large-text">
                  <span> Total Price: 12.45</span>
                </div>
                <div>
                  <button className="w3-btn bakery-blue w3-hover-aqua w3-padding-16 w3-round-medium">Proceed to Checkout</button>
                </div>
              </div>
            </div>



          </div>
        </div>




        <div className="w3-padding-64"></div>
        {/* End page content */}
      </div>

      {/* Footer. */}
      <footer className="w3-center bakery-blue w3-padding-48 w3-large">

      </footer>
    </>





  )

}





export default Cart;