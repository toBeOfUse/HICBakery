import Header from "../components/Header";


const Cart = () => {
    return (
<>
  <title>Cupcake Corner</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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


  {/* Add a background color and large text to the whole page */}
  <div className="w3-white w3-large">
    
  {/*Row for cart compoent and price compoent */}
  <div className= "w3-container">
    <div className= "w3-row">

    {/*Cart containing row - left half of the page*/}
      <div className = "w3-half w3-container">
        <div className = "w3-padding-16"></div>
        <span className="w3-cell w3-wide bakery-blue w3-xxlarge w3-border-left"> Your Cart</span>
        
        <div className= "w3-padding-24"></div>
       
        {/*Cart element*/}
        <div className="w3-row w3-content">
        {/*Photo of product*/}
          <div className="w3-third w3-containers">
            <img
              src="https://www.shutterstock.com/image-photo/tasty-cupcakes-on-stand-260nw-778287970.jpg"
              style={{ width: "100%", maxWidth: 1000 }}
            />
          </div>

          {/*Product Description*/}
          <div className="w3-twothird w3-container">
            {/* List used to create proper-looking formating */}
            <ul className = "w3-ul">
              <li>
                  <span className = "w3-cell w3-wide bakery-blue w3-medium w3-threequarters"> Classic Vanilla Cupcake</span>
              </li>
              <li>
                <span className = "w3-cell w3-padding-8 w3-medium"> A classic vanilla cupcake made with real vanilla and topped with buttercream frosting </span>
                <div className = "w3-medium"> Delivery Status: In stock</div>
                <div className = "w3-row w3-left">
                  <div className = "w3-button w3-half w3-medium w3-padding-top w3-border-bottom">
                    Quantity
                  </div>
                  <div className = "w3-button w3-quarter w3-medium w3-border-bottom">
                    +
                  </div>
                  <div className = "w3-button w3-quarter w3-medium w3-border-bottom">
                    -
                  </div>
                  <div className = "w3-left 23-medium w3-padding-8">
                    Price: 3.50
                  </div>
                </div>
              </li>
            </ul>
          </div>   
        </div>

        {/*just another product cart item*/}
        <div className="w3-row w3-content w3-padding-top-32">
        {/*Photo of product*/}
          <div className="w3-third w3-containers">
            <img
              src="https://www.shutterstock.com/image-photo/tasty-cupcakes-on-stand-260nw-778287970.jpg"
              style={{ width: "100%", maxWidth: 1000 }}
            />
          </div>

          {/*Product Description*/}
          <div className="w3-twothird w3-container">
            {/* List used to create proper-looking formating */}
            <ul className = "w3-ul">
              <li>
                  <span className = "w3-cell w3-wide bakery-blue w3-medium w3-threequarters"> Classic Vanilla Cupcake</span>
              </li>
              <li>
                <span className = "w3-cell w3-padding-8 w3-medium"> A classic vanilla cupcake made with real vanilla and topped with buttercream frosting </span>
                <div className = "w3-medium"> Delivery Status: In stock</div>
                <div className = "w3-row w3-left">
                  <div className = "w3-button w3-half w3-medium w3-padding-top w3-border-bottom">
                    Quantity
                  </div>
                  <div className = "w3-button w3-quarter w3-medium w3-border-bottom">
                    +
                  </div>
                  <div className = "w3-button w3-quarter w3-medium w3-border-bottom">
                    -
                  </div>
                  <div className = "w3-left 23-medium w3-padding-8">
                    Price: 3.50
                  </div>
                </div>
              </li>
            </ul>
          </div>   
        </div>
      
        <div className="w3-row w3-content w3-padding-top-32">
        {/*Photo of product*/}
          <div className="w3-third w3-containers">
            <img
              src="https://www.shutterstock.com/image-photo/tasty-cupcakes-on-stand-260nw-778287970.jpg"
              style={{ width: "100%", maxWidth: 1000 }}
            />
          </div>

          {/*Product Description*/}
          <div className="w3-twothird w3-container">
            {/* List used to create proper-looking formating */}
            <ul className = "w3-ul">
              <li>
                  <span className = "w3-cell w3-wide bakery-blue w3-medium w3-threequarters"> Classic Vanilla Cupcake</span>
              </li>
              <li>
                <span className = "w3-cell w3-padding-8 w3-medium"> A classic vanilla cupcake made with real vanilla and topped with buttercream frosting </span>
                <div className = "w3-medium"> Delivery Status: In stock</div>
                <div className = "w3-row w3-left">
                  <div className = "w3-button w3-half w3-medium w3-padding-top w3-border-bottom">
                    Quantity
                  </div>
                  <div className = "w3-button w3-quarter w3-medium w3-border-bottom">
                    +
                  </div>
                  <div className = "w3-button w3-quarter w3-medium w3-border-bottom">
                    -
                  </div>
                  <div className = "w3-left 23-medium w3-padding-8">
                    Price: 3.50
                  </div>
                </div>
              </li>
            </ul>
          </div>   
        </div>
      </div>
      {/*End left half of page */}

      {/*Begin right half of page */}

      <div className="w3-cell w3-half w3-padding-64">
        <div className = "w3-padding-32"></div>
        <div className = "w3-card-2 w3-center w3-margin-right w3-margin-left w3-padding-64 w3-round-medium">
            <div className = "w3-padding-16 w3-large-text">
              <span> Total Price: 12.45</span>
            </div>
            <div>
              <button className="w3-btn bakery-blue w3-hover-aqua w3-padding-16 w3-round-medium">Proceed to Checkout</button>
            </div>
        </div>
      </div>



    </div>
  </div>

   


   <div className = "w3-padding-64"></div>
    {/* End page content */}
  </div>

  {/* Footer. */}
  <footer className="w3-center bakery-blue w3-padding-48 w3-large">

  </footer>
</>





    )

}





export default Cart;