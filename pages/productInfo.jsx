import Head from "next/head";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import db from "../components/db";
import { useCart } from "../components/cart-provider";
import { useRouter } from "next/router";
import { batchProductsByCategory, categoryJoinQuery } from "../utilities/categories";
import CategorySuggester from "../components/category-suggester";
import Button from "../components/button";
import Router from "next/router";

export async function getServerSideProps(context) {
  const productID = context.query.product ?? 1;
  const product = db.prepare("select * from products where id=?").get(productID);
  const categories = db.prepare(
    "select category_name from product_categories where product_id=?"
  ).all(productID);
  const relevantProducts = db.prepare(`
    ${categoryJoinQuery}
      where categories.name in (${categories.map(c => `'${c.category_name}'`).join(",")})
  `).all();
  return { props: { product, suggestions: batchProductsByCategory(relevantProducts) } };
}


const ProductInfo = ({ product, suggestions }) => {
  const [cart, updateCart] = useCart();
  const [cartQuantity, setCartQuantity] = useState(1);
  const inCart = useMemo(
    () => cart.find(c => c.product.id == product.id)?.quantity_in_cart,
    [cart, product.id]
  );

  const addToCart = () => {
    fetch("/api/addToCart", {
      method: "POST",
      body: JSON.stringify({ product_id: product.id, quantity: cartQuantity })
    }).then(updateCart);
  };

  const router = useRouter();
  const [fromSearch, setFromSearch] = useState(false);
  useEffect(() => {
    setFromSearch(router.query.from === "search");
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      {/* React Header (sit on top) */}
      <Header collapsed={true} />

      {/* return to results button  */}
      {fromSearch &&
        <div className="w3-container w3-padding-16 w3-margin-right w3-border-left">
          <div>
            <Button
              style={{ fontSize: "large" }}
              onClick={() => router.back()}>
              ← Return to Search Results
            </Button>
          </div>
        </div>
      }

      {/* Add a background color and large text to the whole page */}
      <div className="w3-white w3-large" style={{ marginTop: 20 }}>


        {/* Contains product photo and info */}
        <div className="w3-row w3-content"
          style={{ border: "1px solid black", boxShadow: "2px 8px 3px lightgray", padding: 30, borderRadius: 10, width: 800, display: "flex", alignItems: "center" }}>
          {/* Product Photo */}
          <div className="w3-quarter w3-container">
            {/* Contains image compment and favorites recommendation in one large column*/}
            <img
              src={`/${product.photo_file_name}`}
              style={{ width: "100%", maxWidth: 1000 }}
            />
          </div>
          {/* Product Infomation*/}
          <div className="w3-threequarter w3-container">
            <ul className="w3-ul">
              {/*Product name, product description + add to cart, and ingridents and allergenes button is stored as a list*/}
              <li>
                <span className="w3-cell w3-wide bakery-blue w3-xxlarge">{product.name}</span>
              </li>
              <li>
                <div className="w3-display-container">
                  <span className="w3-cell w3-padding-16 w3-xlarge">{product.description}</span>

                  {/*Add to Cart component */}
                  <div>
                    <input type="number" value={cartQuantity} style={{ width: 50 }}
                      onChange={e => setCartQuantity(parseInt(e.target.value))}
                      min="1" max="5"></input>
                    <Button onClick={addToCart} style={{ margin: "0 10px" }}> + Add to Cart</Button>
                    {inCart && <span>({inCart} in cart now)</span>}
                  </div>
                </div>
              </li>

              {/* Container containing ingredients and allergens button*/}
              <li>
                <div className="w3-row w3-container">
                  <div className="w3-quarter w3-large">
                    <Button>Ingredients</Button>
                  </div>
                  <div className="w3-large">
                    <Button onClick={()=> {router.push(`/allergenInfo`);}}>Allergens</Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <CategorySuggester suggestions={suggestions} />
      </div>
      {/* Footer. This section contains an ad for W3Schools Spaces. You can leave it to support us. */}
      <Footer />
    </>
  )
}

export default ProductInfo;
