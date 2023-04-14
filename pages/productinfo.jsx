import Header from "../components/Header";


const ProductInfo = () => {
    return (
<>
  <title>Cupcake Corner</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Inconsolata"
  />
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
  
  {/* Maybe make the results button always bakery blue */}
  <div className="w3-container w3-padding-32 w3-margin-right w3-border-left">
    <div>
    <a className = "w3-btn bakery-blue w3-border-left" href="https://localhost:3000/search"> <h4> ← Return to Search Results </h4> </a>
    </div>
  </div>

  {/* Add a background color and large text to the whole page */}
  <div className="w3-white w3-large">
   
  {/* Contains product photo and info */}
  <div className = "w3-row w3-content">
    {/* Product Photo */}
    <div className = "w3-quarter w3-container">
      <img
          src="../public/cupcakes.png"
          style={{ width: "100%", maxWidth: 1000, marginTop: 1 }}
        />
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
          Add to cart
          </div>
        </li>
        {/* Container containing ingredients and allergens button*/}
        <li>
          <div className = "w3-row w3-container w3-stretch">
            <div className = "w3-quarter w3-large">
              Ingredients
            </div>
            <div className = "w3-threequarter w3-large">
              Allergens
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
  {/* Menu Container */}
    <div className="w3-container" id="menu">
      <div className="w3-content" style={{ maxWidth: 700 }}>
        <h5 className="w3-center w3-padding-48">
          <span className="w3-tag w3-wide">THE MENU</span>
        </h5>
        <div className="w3-row w3-left w3-card w3-padding">
          <a
            href="javascript:void(0)"
            onclick="openMenu(event, 'Eat');"
            id="myLink"
          >
            <div className="w3-col s6 tablink">Eat</div>
          </a>
          <a href="javascript:void(0)" onclick="openMenu(event, 'Drinks');">
            <div className="w3-col s6 tablink">Drink</div>
          </a>
        </div>
        <div id="Eat" className="w3-container menu w3-padding-48 w3-card">
          <h5>Bread Basket</h5>
          <p className="w3-text-grey">
            Assortment of fresh baked fruit breads and muffins 5.50
          </p>
          <br />
          <h5>Honey Almond Granola with Fruits</h5>
          <p className="w3-text-grey">
            Natural cereal of honey toasted oats, raisins, almonds and dates
            7.00
          </p>
          <br />
          <h5>Belgian Waffle</h5>
          <p className="w3-text-grey">
            Vanilla flavored batter with malted flour 7.50
          </p>
          <br />
          <h5>Scrambled eggs</h5>
          <p className="w3-text-grey">
            Scrambled eggs, roasted red pepper and garlic, with green onions
            7.50
          </p>
          <br />
          <h5>Blueberry Pancakes</h5>
          <p className="w3-text-grey">
            With syrup, butter and lots of berries 8.50
          </p>
        </div>
        <div id="Drinks" className="w3-container menu w3-padding-48 w3-card">
          <h5>Coffee</h5>
          <p className="w3-text-grey">Regular coffee 2.50</p>
          <br />
          <h5>Chocolato</h5>
          <p className="w3-text-grey">Chocolate espresso with milk 4.50</p>
          <br />
          <h5>Corretto</h5>
          <p className="w3-text-grey">Whiskey and coffee 5.00</p>
          <br />
          <h5>Iced tea</h5>
          <p className="w3-text-grey">Hot tea, except not hot 3.00</p>
          <br />
          <h5>Soda</h5>
          <p className="w3-text-grey">Coke, Sprite, Fanta, etc. 2.50</p>
        </div>
        <img
          src="https://www.w3schools.com/w3images/coffeehouse2.jpg"
          style={{ width: "100%", maxWidth: 1000, marginTop: 32 }}
        />
      </div>
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