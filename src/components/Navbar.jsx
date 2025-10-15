import { FaShoppingCart } from "react-icons/fa";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link, Links } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            ThriftStore
          </div>

          {/* Nav links */}
          <div className="hidden md:flex space-x-8 font-medium">
            <ul className="flex space-x-8 font-medium">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
          
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Right side: Cart + User */}
          <div className="flex items-center space-x-4">
            <button className="relative text-gray-700 hover:text-blue-600">
              <Link to="/cart" className="text-gray-700 hover:text-indigo-600">
              <FaShoppingCart size={20} />
              </Link>
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5">
                {/* replace with dynamic cart count later */}0
              </span>
            </button>

            {/* Authentication / user UI */}
            <SignedOut>
              <SignInButton>
                <button className="text-gray-700 hover:text-blue-600">
                  {/* could also use a generic user icon */}
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Mobile nav toggle + menu (you can keep your previous mobile menu logic) */}
    </nav>
  );
}
