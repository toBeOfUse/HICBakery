import { useMemo } from "react";
import { useCart } from "../components/CartProvider";
import Header from "../components/Header";
import Footer from "../components/footer";
import styles from "../styles/checkout.module.css";
import { formatPrice } from "../utilities/format.js";

const Checkout = () => {
  const [cart, updateCart] = useCart();
  const totalPrice = useMemo(() =>
    cart.reduce(
      (acc, val) => acc + val.product.price * val.quantity_in_cart, 0
    ), [cart]);

  return (
    <>
      <Header collapsed={true} />
      {/* About Container */}
      <div className="w3-container" id="about">
        <div className="w3-content" style={{ maxWidth: 700 }}>
          <h5 className="w3-center w3-padding-32">
            <span className={styles.header}>Checkout</span>
          </h5>
          <div className="row">
            <div className="col-25">
              <div className="container">
                <h4>
                  Your items:
                </h4>
                <table id={styles.itemTable}>
                  <thead>
                    <tr>
                      <th>Item</th><th>Quantity</th><th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(c =>
                      <tr key={c.product.id}>
                        <td>{c.product.name}</td>
                        <td>{c.quantity_in_cart}</td>
                        <td>${formatPrice(c.product.price * c.quantity_in_cart)}</td>
                      </tr>
                    )}
                    <tr><td>Your total:</td><td /><td>${formatPrice(totalPrice)}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <div className="col-75">
              <div className="container">
                <form>
                  <div className={styles.formsRow}>
                    <div className={styles.inputForm}>
                      <h3>Billing Address</h3>
                      <label htmlFor="fname">
                        <i className="fa fa-user" /> Full Name
                      </label>
                      <input type="text" id="fname" name="firstname" />
                      <br />
                      <label htmlFor="email">
                        <i className="fa fa-envelope" /> Email
                      </label>
                      <input type="text" id="email" name="email" />
                      <br />
                      <label htmlFor="adr">
                        <i className="fa fa-address-card-o" /> Address
                      </label>
                      <input type="text" id="adr" name="address" />
                      <br />
                      <label htmlFor="city">
                        <i className="fa fa-institution" /> City
                      </label>
                      <input type="text" id="city" name="city" />
                      <br />
                      <div className="row">
                        <div className="col-50">
                          <label htmlFor="state">State</label>
                          <input type="text" id="state" name="state" />
                        </div>
                        <div className="col-50">
                          <label htmlFor="zip">Zip</label>
                          <input type="text" id="zip" name="zip" />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className={styles.inputForm}>
                      <h3>Payment</h3>
                      <label>Accepted Cards</label>
                      <br />
                      <label htmlFor="cname">Name on Card</label>
                      <input type="text" id="cname" name="cardname" />
                      <br />
                      <label htmlFor="ccnum">Credit card number</label>
                      <input type="text" id="ccnum" name="cardnumber" />
                      <br />
                      <label htmlFor="expmonth">Expires</label>
                      <input type="text" id="expmonth" name="expmonth" />
                      <br />
                      <div className="row">
                        <div className="col-50">
                          <label htmlFor="cvv">CVV</label>
                          <input type="text" id="cvv" name="cvv" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked="checked"
                      name="sameadr"
                    />{" "}
                    Shipping address same as billing
                  </label>
                  <br />
                  <br />
                  <input
                    type="submit"
                    defaultValue="Continue to checkout"
                    className="btn"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        <p>
          <strong>Have a special request or want to send us a message?</strong>
        </p>
        <strong>
          <form action="/action_page.php" target="_blank">
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="Name"
                required=""
                name="Name"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="Message"
                required=""
                name="Message"
              />
            </p>
            <p>
              <button className="w3-button w3-black" type="submit">
                SEND MESSAGE
              </button>
            </p>
          </form>
        </strong>
      </div>
      <Footer />
    </>
  )
}

export default Checkout;
