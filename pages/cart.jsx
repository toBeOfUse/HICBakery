import Link from "next/link";
import Head from "next/head";
import { useMemo } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CartItem from "../components/cart-item";
import { formatPrice } from "../utilities/format";
import styles from "../styles/cart.module.css";
import { useCart } from "../components/cart-provider";
import Button from "../components/button";

const Cart = () => {
  const [cartItems, _] = useCart();
  const totalPrice = useMemo(() =>
    cartItems.reduce(
      (acc, val) => acc + val.product.price * val.quantity_in_cart, 0
    ), [cartItems]);


  return (
    <>
      <Head>
        <title>Your Cart</title>
      </Head>
      <Header collapsed={true} />
      <div className={styles.container}>

        {/*Row for cart compoent and price component */}
        <div>
          <p className={styles.header}> Your Cart</p>
          <div className={styles.primaryContentContainer}>
            {/*Cart containing row - left half of the page*/}
            <div>

              {cartItems.length > 0 ?
                cartItems.map((item, i) => <CartItem {...item} key={i} />) :
                <p>Your cart is empty.</p>
              }

            </div>
            {/*End left half of page */}

            {/*Begin right half of page */}

            <div className={"w3-card-2 w3-center w3-round-medium " + styles.priceContainer}>
              <p> Total Price: ${formatPrice(totalPrice)}</p>
              <div>
                <Link href={totalPrice ? '/checkout' : ''}>
                  <Button
                    style={{ padding: 12, backgroundColor: totalPrice ? "" : "lightgray" }}>
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* End page content */}
      </div>
      <Footer />
    </>
  )
}

export default Cart;
