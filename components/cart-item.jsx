import Link from "next/link";
import { formatPrice } from "../utilities/format";
import styles from "../styles/cart-item.module.css";
import { useState } from "react";
import { useCart } from "./CartProvider";

export default function CartItem({ product, quantity_in_cart }) {
    const [_, updateCart] = useCart();
    const [quantity, setQuantity] = useState(quantity_in_cart);
    const updateQuantity = (newQuantity) => {
        fetch("/api/changeCartQuantity", {
            method: "PUT",
            body: JSON.stringify({
                product_id: product.id,
                quantity: newQuantity ?? quantity
            })
        }).then(updateCart);
    };
    return <div className={styles.container}>
        {/*Photo of product*/}
        <img
            src={`/${product.photo_file_name}`}
            className={styles.image}
            alt={`Image of ${product.name}`}
        />

        {/*Product Description*/}
        <div className={styles.productText}>
            <h3 className={styles.productName}>
                <Link href={`/productInfo?product=${product.id}`}>
                    {product.name}
                </Link>
            </h3>

            <p className={styles.productDescription}>{product.description}</p>

            <div className={styles.smallProductText}>
                <span>Item price: ${formatPrice(product.price)}</span>
                <span> Quantity in cart:
                    <input min="0" max="5" type="number" value={quantity}
                        onChange={e => setQuantity(parseInt(e.target.value))} />
                    <button onClick={() => updateQuantity()}>Update</button>
                    <button onClick={() => updateQuantity(0)}>Remove</button>
                </span>
            </div>
        </div>
    </div>
}