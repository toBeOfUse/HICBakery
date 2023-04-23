export default function CartItem({ product, quantity_in_cart }) {
    return <div className="w3-row w3-content">
        {/*Photo of product*/}
        <div className="w3-third w3-containers">
            <img
                src={`/product_photos/${product.photo_file_name}`}
                style={{ width: "100%", maxWidth: 1000 }}
            />
        </div>

        {/*Product Description*/}
        <div className="w3-twothird w3-container">
            {/* List used to create proper-looking formating */}
            <ul className="w3-ul">
                <li>
                    <span className="w3-cell w3-wide bakery-blue w3-medium w3-threequarters">{product.name}</span>
                </li>
                <li>
                    <span className="w3-cell w3-padding-8 w3-medium">{product.description}</span>
                    <div className="w3-medium"> Delivery Status: In stock</div>
                    <div className="w3-row w3-left">
                        <div className="w3-button w3-half w3-medium w3-padding-top w3-border-bottom">
                            {quantity_in_cart}
                        </div>
                        <div className="w3-left 23-medium w3-padding-8">
                            Price: ${(product.price / 100).toFixed(2)}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
}