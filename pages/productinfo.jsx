import Header from "../components/Header";


const ProductInfo = () => {
    return (
<>
  <title>Cupcake Corner</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    body, html {\n      height: 100%;\n      font-family: "Inconsolata", sans-serif;\n    }\n\n    .bgimg {\n      background-position: center;\n      background-size: cover;\n      background-image: url("https://www.w3schools.com/w3images/coffeehouse.jpg");\n      min-height: 75%;\n    }\n\n    .menu {\n      display: none;\n    }\n    '
    }}
  />
  {/* React Header (sit on top) */}
    <div className="w3-row w3-padding bakery-blue">
    <Header collapsed={true} />
    </div>
  
  {/* return to results button  */}
  <div className="w3-container w3-padding-32 w3-margin-right w3-border-left">
    <div>
    <a className = "w3-btn w3-transparent w3-border-left w3-hover-aqua" href="https://localhost:3000/search"> <h4> ← Return to Search Results </h4> </a>
    </div>
  </div>

  {/* Add a background color and large text to the whole page */}
  <div className="w3-white w3-large">
   

  {/* Contains product photo and info */}
  <div className = "w3-row w3-content ">
    {/* Product Photo */}
    <div className = "w3-quarter w3-container">
    <img
          src="https://www.shutterstock.com/image-photo/tasty-cupcakes-on-stand-260nw-778287970.jpg"
          style={{ width: "100%", maxWidth: 1000 }}
        />
          <div className = "w3-padding-64"></div>
          <div className = "w3-padding-64"></div>
          <div className = "w3-padding-64"></div>
          <div className = "w3-padding-16"></div>
          <div> test </div>
    </div>
    {/* Product Infomation*/}
    <div className = "w3-threequarter w3-container">
      <ul className = "w3-ul">
        {/*Product name, product description + add to cart, and ingridents and allergenes button is stored as a list*/ }
        <li>
          <span className="w3-cell w3-wide bakery-blue w3-xxlarge">   Classic Vanilla Cupcake   </span>
        </li>
        <li>
          <div className="w3-display-container">
          <span className="w3-cell w3-padding-16 w3-xlarge"> A classic vanilla cupcake made with real vanilla and topped with fresh buttercream frosting </span>

          {/*Add to Cart component */}
          <div class="w3-dropdown-hover">
            <button class="w3-button"> + Add to Cart </button>
              <div class="w3-dropdown-content w3-bar-block w3-border">
                <a href="#" class="w3-bar-item w3-button">1</a>
                <a href="#" class="w3-bar-item w3-button">2</a>
                <a href="#" class="w3-bar-item w3-button">3</a>
              </div>
            </div>
          </div>
        </li>

        {/* Container containing ingredients and allergens button*/}
        <li>
          <div className = "w3-row w3-container w3-stretch">
            <div className = "w3-quarter w3-large">
            <button class="w3-btn w3-transparent w3-hover-aqua">Ingredients</button>
            </div>
            <div className = "w3-threequarter w3-large">
            <button class="w3-btn w3-transparent w3-hover-aqua">Allergens</button>
            </div>
          </div>
        </li>
        <li>
          <div className = "w3-padding-64"></div>
          <div className = "w3-padding-64"></div>
          <div>
          <div className = "w3-container w3-card-2" id="menu">
            <div className="w3-content">
              <h5 className = "w3-center"><span className = "w3-tag bakery-blue w3-wide"> Our Favorites</span></h5>

              <div id="Eat" className = "w3-container w3-card-2 menu w3-padding-48"></div>
                <h5>Bread basket</h5>
                <p className="w3-text-grey w3-medium"> Product Description</p>

                <h5>Bread basket</h5>
                <p className="w3-text-grey w3-medium"> Product Description</p>

                <h5>Bread basket</h5>
                <p className="w3-text-grey w3-medium"> Product Description</p>

                <h5>Bread basket</h5>
                <p className="w3-text-grey w3-medium"> Product Description</p>

                <h5>Bread basket</h5>
                <p className="w3-text-grey w3-medium"> Product Description</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
  <div className = "w3-container w3-padding-64">
  </div>



  

    {/* Contact/Area Container */}
    <div className="w3-container" id="where" style={{ paddingBottom: 32 }}>
      <div className="w3-content" style={{ maxWidth: 700 }}>
        <h5 className="w3-center w3-padding-48">
          <span className="w3-tag w3-wide">WHERE TO FIND US</span>
        </h5>
        <p>Find us at some address at some place.</p>
        <img
          src="https://www.w3schools.com/w3images/map.jpg"
          className="w3-image"
          style={{ width: "100%" }}
        />
        <p>
          <span className="w3-tag">FYI!</span> We offer full-service catering
          for any event, large or small. We understand your needs and we will
          cater the food to satisfy the biggerst criteria of them all, both look
          and taste.
        </p>
        <p>
          <strong>Reserve</strong> a table, ask for today's special or just send
          us a message:
        </p>
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
              type="number"
              placeholder="How many people"
              required=""
              name="People"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="datetime-local"
              placeholder="Date and time"
              required=""
              name="date"
              defaultValue="2020-11-16T20:00"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Message \ Special requirements"
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
      </div>
    </div>
    {/* End page content */}
  </div>
  {/* Footer. This section contains an ad for W3Schools Spaces. You can leave it to support us. */}
  <footer className="w3-center w3-light-grey w3-padding-48 w3-large">
    <p>
      This website was made with W3schools Spaces. Make your own free website
      today!
    </p>
    <a
      className="w3-button w3-round-xxlarge w3-dark-grey w3-margin-bottom"
      href="https://www.w3schools.com/spaces"
      target="_blank"
    >
      Start now
    </a>
    {/* Footer end. */}
  </footer>
</>
    )
}

export default ProductInfo;