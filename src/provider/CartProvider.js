import { createContext, useContext,useState } from "react";
export const CartContext = createContext();

export const cartProvider = ({children}) =>{
    const[cartItems,setCartItems] = useState([]);

    return (
        <CartContext.Provider value={}>
            {children}
        </CartContext.Provider>
    )
}