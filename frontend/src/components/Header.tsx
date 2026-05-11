import { useState } from "react";

import { Menu, X, Search, Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Shop", "About", "Sign Up"];

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-gray-200
        bg-white/90
        backdrop-blur-md
      "
    >
      <div className="max-w-7xl mx-auto h-20 px-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-widest">Exclusive</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="
                  relative
                  font-medium
                  text-gray-600
                  hover:text-black
                  cursor-pointer
                  transition
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-black
                  after:transition-all
                  hover:after:w-full
                "
              >
                {link}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search */}
          <div
            className="
              flex
              items-center
              gap-2
              bg-gray-100
              rounded-full
              px-4
              py-2
              w-[260px]
            "
          >
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="What are you looking for?"
              className="
                bg-transparent
                outline-none
                text-sm
                w-full
              "
            />
          </div>

          {/* Icons */}
          <button
            className="
              w-10
              h-10
              rounded-full
              hover:bg-gray-100
              flex
              items-center
              justify-center
              transition
            "
          >
            <Heart size={22} />
          </button>

          <button
            className="
              relative
              w-10
              h-10
              rounded-full
              hover:bg-gray-100
              flex
              items-center
              justify-center
              transition
            "
          >
            <ShoppingCart size={22} />

            {/* Cart Badge */}
            <span
              className="
                absolute
                -top-1
                -right-1
                bg-[#DB4444]
                text-white
                text-xs
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
              "
            >
              2
            </span>
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            lg:hidden
            w-10
            h-10
            flex
            items-center
            justify-center
          "
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ${isOpen ? "max-h-[500px] border-t border-gray-200" : "max-h-0"}
        `}
      >
        <div className="px-4 py-5 space-y-5 bg-white">
          {/* Mobile Search */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col gap-5">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="
                  font-medium
                  text-gray-700
                  hover:text-[#DB4444]
                  transition
                  cursor-pointer
                "
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
