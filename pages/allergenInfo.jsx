import Header from "../components/Header"



const AllergenInfo = () => {

    return (
        <>
        <>
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inconsolata"
          />
          <link rel="stylesheet" href="allergenInfo.css" />
          <script
            src="https://kit.fontawesome.com/499bfd8862.js"
            crossOrigin="anonymous"
          >
          </script>

          <style
            dangerouslySetInnerHTML={{
              __html:
              '\nbody, html {\n  height: 100%;\n  font-family: "Inconsolata", sans-serif;\n}\n\n.menu {\n  display: none;\n}\n'
            }}
          />
        </>

        <Header collapsed={true} />
        <>
  {/* Add a background color and large text to the whole page */}
  <div className="w3-sand w3-grayscale w3-large">
    {/* About Container */}
    <div className="w3-container" id="about">
      <div className="w3-content" style={{ maxWidth: 700 }}>
        <h5 className="w3-center w3-padding-64">
          <span className="w3-tag w3-wide">Allergen Information</span>
        </h5>
        <p>
          {" "}
          While our bakery's fresh and delicious goods are enjoyed by all, some
          of our products can contain common allergens, such as:{" "}
        </p>
        <br />
        <div className="row">
          <div className="column">
            <div className="dropdown">
              <i className="fa-solid fa-ice-cream fa-2xl" />
              <p onclick= {onButtonClick(0)} className="dropbtn">
                Dairy
              </p>
              <div id="myDropdown0" className="dropdown-content">
                <p>Oat Milk</p>
                <p>Almond Milk</p>
                <p>Soy Milk</p>
                <p>Rice Milk</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="dropdown">
              <i className="fa-solid fa-seedling fa-2xl" />
              <p onclick= {onButtonClick(1)} className="dropbtn">
                Tree Nuts
              </p>
              <div id="myDropdown1" className="dropdown-content">
                <p>Pumpkin Seed</p>
                <p>Sunflower Seed</p>
                <p>Chickpeas</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="dropdown">
              <i className="fa-solid fa-wheat-awn fa-2xl" />
              <p onclick= {onButtonClick(2)} className="dropbtn">
                Wheat
              </p>
              <div id="myDropdown2" className="dropdown-content">
                <p>Quinoa</p>
                <p>Buckwheat</p>
                <p>Sorghum</p>
                <p>Amaranth</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="dropdown">
              <i className="fa-solid fa-egg fa-2xl" />
              <p onclick= {onButtonClick(3)} className="dropbtn">
                Egg
              </p>
              <div id="myDropdown3" className="dropdown-content">
                <p>Buttermilk</p>
                <p>Condensed Milk</p>
                <p>Yogurt</p>
                <p>Tofu</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="dropdown">
              <i className="fa-solid fa-cubes-stacked fa-2xl" />
              <p onclick= {onButtonClick(4)} className="dropbtn">
                Sesame
              </p>
              <div id="myDropdown4" className="dropdown-content">
                <p>Poppy Seed</p>
                <p>Flax Seed</p>
                <p>Chia Seed</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="dropdown">
              <i className="fa-solid fa-bottle-droplet fa-2xl" />
              <p onclick= {onButtonClick(5)} className="dropbtn">
                Soy
              </p>
              <div id="myDropdown5" className="dropdown-content">
                <p>Oat Milk</p>
                <p>Almond Milk</p>
                <p>Soy Milk</p>
                <p>Rice Milk</p>
              </div>
            </div>
          </div>
        </div>
        <p>Click on the icons above to see available substitutions.</p>
      </div>
    </div>
    {/* Contact/Area Container */}
    <div className="w3-container" id="where" style={{ paddingBottom: 32 }}>
      <div className="w3-content" style={{ maxWidth: 700 }}>
        <h5 className="w3-center w3-padding-48">
          <span className="w3-tag w3-wide">WHERE TO FIND US</span>
        </h5>
        <p>Find us at some address at some place.</p>
        {/* Include an image of a bakery here */}&gt;
        <p>
          <span className="w3-tag">FYI!</span> We deliver!
        </p>
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
    </div>
  </div>

        </>
        </>
    )
}

function onButtonClick(event, index) {

    // closes dropdown when another is selected
    if (event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  
    let id = "myDropdown" + index;
    document.getElementById(id).classList.toggle("show");
}

global.onClick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

export default AllergenInfo