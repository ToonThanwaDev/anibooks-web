import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import useCart from "../hooks/useCart";

export default function TotalCost() {
  const { cart } = useCart(CartContext);

  return (
    <>
      <div>
        <div className="flex font-GentiumPlus justify-between py-6 text-lg uppercase text-white">
          <span>Total cost</span>
          <span>{`฿ ${cart.reduce(
            (total, item) => total + item.Product.price * item.quantity,
            0
          )}`}</span>
        </div>
        <button className="bg-indigo-500 font-GentiumPlus hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          <Link to="/payment">Checkout</Link>
        </button>
      </div>
    </>
  );
}
