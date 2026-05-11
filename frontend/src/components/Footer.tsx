import { MdSend } from "react-icons/md";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const accountLinks = [
    "My Account",
    "Login / Register",
    "Cart",
    "Wishlist",
    "Shop",
  ];

  const quickLinks = ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"];

  return (
    <footer className="bg-black text-white font-sans">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-12
          "
        >
          {/* Newsletter */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold tracking-wide">Exclusive</h2>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Subscribe</h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                Get 10% off your first order
              </p>
            </div>

            {/* Input */}
            <div
              className="
                flex
                items-center
                border
                border-white/30
                rounded-xl
                px-4
                py-3
                transition
                focus-within:border-white
              "
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  bg-transparent
                  outline-none
                  w-full
                  text-sm
                  placeholder:text-gray-500
                "
              />

              <button
                className="
                  hover:text-[#DB4444]
                  transition
                "
              >
                <MdSend size={22} />
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold">Support</h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p>111 Bijoy Sarani, Dhaka, Bangladesh.</p>

              <p>exclusive@gmail.com</p>

              <p>+88015-88888-9999</p>
            </div>
          </div>

          {/* Account */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold">Account</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              {accountLinks.map((link, index) => (
                <li
                  key={index}
                  className="
                    hover:text-white
                    transition
                    cursor-pointer
                  "
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold">Quick Link</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="
                    hover:text-white
                    transition
                    cursor-pointer
                  "
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* App & Social */}
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold mb-2">Download App</h3>

              <p className="text-xs text-gray-400">
                Save $3 with App New User Only
              </p>
            </div>

            {/* App Download */}
            <div className="flex gap-3">
              {/* QR */}
              <div
                className="
                  bg-white
                  p-2
                  rounded-lg
                  w-24
                  h-24
                "
              >
                <div className="w-full h-full bg-black rounded-md"></div>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  className="
                    border
                    border-white/20
                    rounded-lg
                    px-4
                    py-2
                    text-xs
                    hover:bg-white
                    hover:text-black
                    transition
                  "
                >
                  Google Play
                </button>

                <button
                  className="
                    border
                    border-white/20
                    rounded-lg
                    px-4
                    py-2
                    text-xs
                    hover:bg-white
                    hover:text-black
                    transition
                  "
                >
                  App Store
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 pt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="
                      w-10
                      h-10
                      rounded-full
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      hover:bg-white
                      hover:text-black
                      transition-all
                      duration-300
                    "
                  >
                    <Icon size={16} />
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="
          border-t
          border-white/10
          py-6
          text-center
          text-sm
          text-gray-500
        "
      >
        © 2026 Exclusive. All rights reserved.
      </div>
    </footer>
  );
}
