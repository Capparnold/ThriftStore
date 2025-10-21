import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  // format prices with commas (e.g., 10,000)
  const formatPrice = (price) => price.toLocaleString();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-300 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty. Go add some items!
        </p>
      ) : (
        <div className="bg-white shadow-lg rounded-2xl p-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm">
                    Ksh {formatPrice(item.price)} × {item.quantity}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-semibold text-gray-900">
              Total:{" "}
              <span className="text-blue-600">Ksh {formatPrice(total)}</span>
            </p>
            <div className="flex gap-3">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Clear Cart
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}