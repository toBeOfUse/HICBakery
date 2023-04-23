import { createContext, useContext, useState, useEffect } from "react";

async function getCartState() {
    return await (await fetch("/api/getCart")).json();
}

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const updateCart = async () => {
        setCart(await getCartState());
    }
    useEffect(() => { updateCart(); }, []);
    return <CartContext.Provider value={[cart, updateCart]}>
        {children}
    </CartContext.Provider>;
}
