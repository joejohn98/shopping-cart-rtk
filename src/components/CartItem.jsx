import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const { id, name, price, image, category, quantity } = item || {};
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = () => {
      if (quantity > 1) {
        dispatch(decreaseQuantity(id));
      } else {
        removeFromCart()
      }
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  }
  return (
    <div>
      <div className="rounded-lg ">
        <div className="sm:flex sm:justify-start items-center shadow-md p-6 bg-white rounded-lg mb-6 justify-between">
          {/* product img */}
          <img
            src={image}
            alt=""
            className="w-full h-28 sm:w-40 object-cover rounded"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            {/* product details */}
            <div>
              <h2 className="text-lg font-bold text-gray-900">{name}</h2>
              <p className="text-sm text-gray-600">Category: {category}</p>
              <p className="text-sm text-gray-600">
                Price: ${Number(price.toFixed(2))}
              </p>
            </div>
            {/* quantity controls */}
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span
                  onClick={handleDecreaseQuantity}
                  className="cursor-pointer rounded-lg bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-white"
                >
                  -
                </span>
                <input
                  type="number"
                  value={quantity}
                  className="size-8 border rounded-lg bg-white text-center text-xs outline-none"
                  readOnly
                />
                <span onClick={handleIncreaseQuantity} className="cursor-pointer rounded-lg bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-white">
                  +
                </span>
              </div>
              <div className="ml-4 flex items-center gap-4">
                <p>${(price * quantity).toFixed(2)}</p>
                <button onClick={handleRemoveFromCart} className="text-red-500 text-sm font-bold cursor-pointer p-2">X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
