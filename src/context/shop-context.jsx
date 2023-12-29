import React, { createContext, useState } from 'react'
import { PRODUCTS } from "../products";
import { Product } from '../Pages/shop/product';
export const ShopContext = createContext(null)


const getDefaultCart = () => {
    let cart = {}
    for (let i=1 ; i<PRODUCTS.length+1 ; i++) {
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const getTotalCartAmount = () => {
        let totalAmout = 0
        for (const item in cartItems) {
            if (cartItems[item]>0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmout += cartItems[item] * itemInfo.price
            }
        }
        return totalAmout
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };

      const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
      }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}
    console.log(cartItems)

    return (
        <ShopContext.Provider value={contextValue}>
          {props.children}
        </ShopContext.Provider>
      );
    };
