import { useMemo } from "react";
import { useCart } from "../components/CartProvider";
import Header from "../components/Header";
import Footer from "../components/footer";
import styles from "../styles/checkout.module.css";
import { formatPrice } from "../utilities/format.js";
import FormField from "../components/form-field";

const Checkout = () => {
  const [cart, updateCart] = useCart();
  const totalPrice = useMemo(() =>
    cart.reduce(
      (acc, val) => acc + val.product.price * val.quantity_in_cart, 0
    ), [cart]);

  return (
    <>
      <Header collapsed={true} />

      <h2 className={styles.header}>Checkout</h2>

      <div className={styles.contentContainer}>
        <div id={styles.formsContainer}>
          <div className={styles.form}>
            <h3>Contact Information</h3>
            <div className={styles.inputsRow}>
              <FormField label="Email" placeholder="joeshmoe@earthlink.com" />
            </div>
          </div>

          <div className={styles.form}>
            <h3>Billing Information</h3>
            <div className="container">

              <div className={styles.inputsRow}>
                <FormField label="Name (First)" placeholder="Joe" />
                <FormField label="Name (Last)" placeholder="Shmoe" />
              </div>

              <div className={styles.inputsRow}>
                <FormField label="Address" placeholder="641 South Irving Boulevard" />
              </div>

              <div className={styles.inputsRow}>
                <FormField label="City" placeholder="Los Angeles" />
                <FormField label="State" placeholder="CA" style={{ flexShrink: 1.5 }} />
                <FormField label="ZIP Code" placeholder="90005" />
              </div>

            </div>
          </div>
        </div>

        <div id={styles.itemsContainer}>
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
          <button>Complete Purchase</button>
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
      <Footer />
    </>
  )
}

export default Checkout;
