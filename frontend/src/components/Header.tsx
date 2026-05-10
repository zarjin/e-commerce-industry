import { useState } from "react";
import Cart from "../assets/Cart.svg";
import Heart from "../assets/Heart.svg";
import Search from "../assets/Search.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-300">
      <div className="max-w-7xl mx-auto h-20 px-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-semibold tracking-widest font-heading">
            Exclusive
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 text-base">
            <li className="font-medium text-gray-600 cursor-pointer hover:text-black transition">
              Home
            </li>
            <li className="font-medium text-gray-600 cursor-pointer hover:text-black transition">
              Shop
            </li>
            <li className="font-medium text-gray-600 cursor-pointer hover:text-black transition">
              About
            </li>
            <li className="font-medium text-gray-600 cursor-pointer hover:text-black transition">
              Sign Up
            </li>
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Search */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none text-sm w-52"
            />

            <img src={Search} alt="Search" className="w-5 h-5" />
          </div>

          {/* Wishlist */}
          <img src={Heart} alt="Heart" className="w-6 h-6 cursor-pointer" />

          {/* Cart */}
          <img src={Cart} alt="Cart" className="w-6 h-6 cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>

          {/* Mobile Search */}
          <div className="mt-4 flex items-center border border-gray-300 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none text-sm"
            />
            <img src={Search} alt="Search" className="w-5 h-5" />
          </div>
        </div>
      )}
    </header>
  );
}
