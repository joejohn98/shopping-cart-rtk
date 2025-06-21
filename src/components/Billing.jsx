import { useSelector } from "react-redux";

const Billing = () => {
    const cart = useSelector(state => state.cart);
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = total * 0.1;

    const totalBilling = total + tax;
  return (
    <div className="mt-6 rounded-lg bg-white p-6 shadow-md md:mt-0">
      <div className="mb-2 flex space-x-6 justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">${total.toFixed(2)}</p>
      </div>
      <div className="mb-2 flex space-x-6 justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">${tax.toFixed(2)}</p>
      </div>
      <div className="mb-2 flex space-x-6 justify-between">
        <p className="text-gray-700">Total</p>
        <p className="text-gray-700">${totalBilling.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Billing;
