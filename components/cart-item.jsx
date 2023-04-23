import Link from "next/link";
import { formatPrice } from "../utilities/format";
import styles from "../styles/cart-item.module.css";

export default function CartItem({ product, quantity_in_cart }) {
    return <div className={styles.container}>
        {/*Photo of product*/}
        <img
            src={`/product_photos/${product.photo_file_name}`}
            className={styles.image}
        />

        {/*Product Description*/}
        <div className={styles.productText}>
            <h3 className={styles.productName}>
                <Link href={`/productInfo?product=${product.id}`}>
                    {product.name}
                </Link>
            </h3>

            <p className={styles.productDescription}>{product.description}</p>
            {/* <div> Delivery Status: In stock</div> */}
            <div className={styles.smallProductText}>
                <span>Item price: ${formatPrice(product.price)}</span>
                <span> Quantity in cart: {quantity_in_cart} </span>
            </div>
        </div>
    </div >
}