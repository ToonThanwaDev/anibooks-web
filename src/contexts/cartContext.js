import { createContext, useEffect } from "react";
import { useState } from "react";
import * as cartApi from "../apis/cartApi";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(true);

  const fetchCartProduct = async () => {
    try {
      const result = await cartApi.cartProduct();
      setCart(result.data.cartProduct);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCartProduct();
  }, [toggle]);

  const addToCart = async productId => {
    try {
      await cartApi.createCart(productId);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickIncrease = async cartId => {
    try {
      const res = await cartApi.increaseCart(cartId);
      setCart(res.data.increaseProduct);
      setToggle(!toggle);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickDecrease = async cartId => {
    try {
      const res = await cartApi.decreaseCart(cartId);
      setCart(res.data.decreaseProduct);
      setToggle(!toggle);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickDelete = async productId => {
    try {
      const res = await cartApi.deleteProductCart(productId);
      setCart(res.data.allProduct);
      setToggle(!toggle);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleClickDelete,
        fetchCartProduct,
        addToCart,
        handleClickIncrease,
        handleClickDecrease
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
