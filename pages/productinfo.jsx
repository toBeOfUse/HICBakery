import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";


export async function getServerSideProps(context) {
  const db = (await import("../components/db")).default;
  const productID = context.query.product ?? 1;
  const product = db.prepare("select * from products where id=?").get(productID);
  return { props: { product } };
}


const ProductInfo = ({ product }) => {
  const [cartQuantity, setCartQuantity] = useState(1);

  const addToCart = () => {
    fetch("/api/addToCart", { method: "POST", body: JSON.stringify({ product_id: product.id, quantity: cartQuantity }) });
  };

  return (
    <>
      {/* React Header (sit on top) */}
      <Header collapsed={true} />

      {/* return to results button  */}
      <div className="w3-container w3-padding-32 w3-margin-right w3-border-left">
        <div>
          <Link className="w3-btn w3-transparent w3-border-left w3-hover-aqua" href="/search"> <h4> ← Return to Search Results </h4> </Link>
        </div>
      </div>

      {/* Add a background color and large text to the whole page */}
      <div className="w3-white w3-large">


        {/* Contains product photo and info */}
        <div className="w3-row w3-content ">
          {/* Product Photo */}
          <div className="w3-quarter w3-container">
            {/* Contains image compment and favorites recommendation in one large column*/}
            <img
              src={`/product_photos/${product.photo_file_name}`}
              style={{ width: "100%", maxWidth: 1000 }}
            />
            <div className="w3-padding-64"></div>
            <div className="w3-padding-64"></div>
            <div className="w3-padding-64"></div>
            <div className="w3-padding-16"></div>
            <span className="w3-cell w3-wide bakery-blue w3-xlarge"> Not what you wanted? Try our favorites!</span>
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
                  <div class="w3-dropdown-hover">
                    <input type="number" value={cartQuantity} style={{ width: 50 }}
                      onChange={e => setCartQuantity(parseInt(e.target.value))}
                      min="1" max="5"></input>
                    <button onClick={addToCart} class="w3-button"> + Add to Cart </button>
                  </div>
                </div>
              </li>

              {/* Container containing ingredients and allergens button*/}
              <li>
                <div className="w3-row w3-container w3-stretch">
                  <div className="w3-quarter w3-large">
                    <button class="w3-btn w3-transparent w3-hover-aqua">Ingredients</button>
                  </div>
                  <div className="w3-threequarter w3-large">
                    <button class="w3-btn w3-transparent w3-hover-aqua">Allergens</button>
                  </div>
                </div>
              </li>
              <li>
                <div className="w3-padding-64"></div>
                <div className="w3-padding-64"></div>
                <div>
                  <div className="w3-container w3-card-2" id="menu">
                    <div className="w3-content">
                      <h5 className="w3-center"><span className="w3-tag bakery-blue w3-wide"> Our Favorites</span></h5>

                      <div id="Eat" className="w3-container w3-card-2 menu w3-padding-48"></div>
                      <h5>Banana Chocolate Chip Muffin</h5>
                      <p className="w3-text-grey w3-medium w3-border-bottom w3-border-aqua"> A classic way to start breakfast.</p>

                      <h5> Chocolate Overload Chocolate Cake</h5>
                      <p className="w3-text-grey w3-medium w3-border-bottom w3-border-aqua"> A three-layer cake featuring chocolate cake and chocolate frosting.</p>

                      <h5>Snickerdoodle</h5>
                      <p className="w3-text-grey w3-medium w3-border-bottom w3-border-aqua"> Snickerdoodle cookie topped with cinnamon. Served warm.</p>
                      {/* 
                      <h5>The Corner's Cosmic Brownie</h5>
                      <p className="w3-text-grey w3-medium w3-border-bottom w3-border-aqua"> Our verison of the Cosmic brownie. Served with hot fudge.</p>

                      <h5>Reese's Cupcake</h5>
                      <p className="w3-text-grey w3-medium w3-border-bottom w3-border-aqua"> Chocolate and peanut butter cupcake topped with Reese's pieces. </p> */}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w3-container w3-padding-64">
        </div>


      </div>
      {/* Footer. This section contains an ad for W3Schools Spaces. You can leave it to support us. */}
      <footer className="w3-center bakery-blue w3-padding-48 w3-large">
        {/* Footer end. */}
      </footer>
    </>
  )
}

export default ProductInfo;