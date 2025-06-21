import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"
import Billing from "../components/Billing"

const Cart = () => {
  const cart = useSelector(state => state.cart)

  return (
    <div className="py-12 max-w-7xl mx-auto container px-4">
      <h2 className="text-xl font-bold mb-5">Shopping Cart</h2>

      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
        <div className="md:w-2/3 space-y-6">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <CartItem key={index} item={item} />
            ))
          ) : (
            <p className="text-lg font-semibold">Your cart is empty.</p>
          )}
        </div>

        <div>
          <Billing />
        </div>
      </div>
    </div>
  )
}

export default Cart
