import { FaShoppingCart } from "react-icons/fa";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link, Links } from "react-router-dom"; 


export default function Navbar() {
  // Cart count (you can replace this with actual cart logic)
  const {cartItems} = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand name */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-3xl font-bold text-blue-900">ThriftStore</h1>
            </Link>
          </div>

          {/* Desktop Nav links */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button className="relative text-gray-700 hover:text-blue-600">
    <Link to="/cart" className="text-gray-700 hover:text-indigo-600">
      <FaShoppingCart size={20} />
    </Link>
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5">
        {cartCount}
      </span>
    )}
  </button>

            {/* Auth */}
            <SignedOut>
              <SignInButton>
                <button className="text-gray-700 hover:text-blue-600">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md ">
          <ul className="flex flex-col space-y-4 px-6 py-4 font-medium ">
            <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setMobileOpen(false)}>Products</Link></li>
            <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}import { useState } from "react";import { FaBars, FaTimes } from "react-icons/fa";import { useCart } from "../context/CartContext";
 