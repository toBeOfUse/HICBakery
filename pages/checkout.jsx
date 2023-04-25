import Head from "next/head";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { useCart } from "../components/cart-provider";
import Header from "../components/header";
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

  const [showValidation, setShowValidation] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [thanksImage, setThanksImage] = useState(undefined);

  const formRef = useRef(null);

  const submit = () => {
    if (formRef.current && cart.length) {
      const valid = formRef.current.reportValidity();
      if (!valid) {
        setShowValidation(true);
      } else {
        setShowValidation(false);
        setShowThanks(true);
        setThanksImage(cart[0].product.photo_file_name);
        fetch("/api/emptyCart", { method: "PUT" }).then(updateCart);
      }
    }
  }

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Header collapsed={true} />
      {showThanks && <div className={styles.modalBG}>
        <div className={styles.modal}>
          <img height="200" src={"/" + thanksImage} />
          Thanks for your purchase! We appreciate you.
          <br />
          <Link href="/">Return to home</Link>
        </div>
      </div>}

      <div className={styles.pageContainer}>

        <h2 className={styles.header}>Checkout</h2>

        <div className={styles.contentContainer}>
          <form ref={formRef} onInvalid={e => e.preventDefault()}
            className={showValidation ? styles.validation : ''}>
            <div id={styles.formsContainer}>

              <div className={styles.form}>
                <h3>Billing Address</h3>
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
                    <FormField label="State" placeholder="CA" pattern="([A-Z]|[a-z]){2}"
                      warning="Two letters required" style={{ flexShrink: 1.3 }} />
                    <FormField label="ZIP Code" placeholder="90005" pattern="\d{5}" warning="Five digits required" />
                  </div>

                </div>
              </div>

              <div className={styles.form}>
                <h3>Credit Card Information</h3>

                <div className={styles.inputsRow}>
                  <FormField label="Credit Card Number" placeholder="1111 2222 3333 444"
                    pattern="\d{4}\s?\d{4}\s?\d{4}\s?\d{4}" warning="Sixteen digits required" />
                </div>

                <div className={styles.inputsRow}>
                  <FormField label="CVV" placeholder="123" pattern="\d{3}" warning="Three digits required" />
                  <FormField label="Expiration" placeholder="12/23" pattern="\d\d\/\d\d"
                    warning="MM/YY date required" />
                </div>

              </div>

              <div className={styles.form}>
                <h3>Contact Information</h3>
                <div className={styles.inputsRow}>
                  <FormField label="Email" placeholder="joeshmoe@earthlink.com" warning="Valid email required" pattern="\w+@\w+\.\w{2,}" />
                </div>
              </div>

            </div>
          </form>
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
            <button onClick={submit}>Complete Purchase</button>
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <strong>Have a special request or want to send us a message?</strong>
          <FormField label="Message" hideLabel />
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Checkout;
