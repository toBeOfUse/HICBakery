import Header from "../components/Header"
import Footer from "../components/footer";

const Checkout = () => {
  return (
    <>
      <Header collapsed={true} />
      {/* About Container */}
      <div className="w3-container" id="about">
        <div className="w3-content" style={{ maxWidth: 700 }}>
          <h5 className="w3-center w3-padding-64">
            <span className="w3-tag w3-wide">Checkout</span>
          </h5>
          <div className="row">
            <div className="col-25">
              <div className="container">
                <h4>
                  Cart
                  <span className="price" style={{ color: "black" }}>
                    <i className="fa fa-shopping-cart" />
                    <b>4</b>
                  </span>
                </h4>
                <p>
                  <a href="#">Product 1</a> <span className="price">$15</span>
                </p>
                <p>
                  <a href="#">Product 2</a> <span className="price">$5</span>
                </p>
                <p>
                  <a href="#">Product 3</a> <span className="price">$8</span>
                </p>
                <p>
                  <a href="#">Product 4</a> <span className="price">$2</span>
                </p>
                <hr />
                <p>
                  Total{" "}
                  <span className="price" style={{ color: "black" }}>
                    <b>$30</b>
                  </span>
                </p>
              </div>
            </div>
            <br />
            <div className="col-75">
              <div className="container">
                <form action="/action_page.php">
                  <div className="row">
                    <div className="col-50">
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
                    <div className="col-50">
                      <h3>Payment</h3>
                      <label htmlFor="fname">Accepted Cards</label>
                      <div className="icon-container">
                        <i className="fa fa-cc-visa" style={{ color: "navy" }} />
                        <i className="fa fa-cc-amex" style={{ color: "blue" }} />
                        <i
                          className="fa fa-cc-mastercard"
                          style={{ color: "red" }}
                        />
                        <i
                          className="fa fa-cc-discover"
                          style={{ color: "orange" }}
                        />
                      </div>
                      <label htmlFor="cname">Name on Card:</label>
                      <input type="text" id="cname" name="cardname" />
                      <br />
                      <label htmlFor="ccnum">Credit card number:</label>
                      <input type="text" id="ccnum" name="cardnumber" />
                      <br />
                      <label htmlFor="expmonth">Expires:</label>
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
