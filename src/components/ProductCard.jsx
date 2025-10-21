import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  //Add to Cart
  const{ addToCart } = useCart();
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />

        {/* Optional Sale Badge */}
        {product.isOnSale && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            SALE
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{product.category}</p>
        <p className="text-xl font-bold text-gray-900 mb-5">
          Ksh {product.price.toLocaleString()}
        </p>

        {/* Buttons */}
        <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 hover:scale-[1.02] transition-transform duration-200"
        onClick={() => addToCart(product)}>
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}