import { Heart, Truck, RotateCcw, Minus, Plus, Star } from "lucide-react";
import { useState } from "react";

import MainImage from "../assets/Category-Computer.svg";

export default function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <main className="w-full bg-white font-sans px-4 py-10 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <span>Account</span>
          <span>/</span>
          <span>Gaming</span>
          <span>/</span>
          <span className="text-black font-medium">HAVIT HV-G92 Gamepad</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Gallery */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4">
              <button
                className={`
                    w-24
                    h-24
                    bg-[#F5F5F5]
                    rounded-2xl
                    overflow-hidden
                    border-2
                    transition-all
                    duration-300

                  `}
              >
                <img
                  src=""
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>

            {/* Main Image */}
            <div
              className="
                flex-1
                bg-[#F5F5F5]
                rounded-3xl
                p-10
                flex
                items-center
                justify-center
                min-h-[500px]
              "
            >
              <img
                src=""
                alt="Product"
                className="
                  w-full
                  max-w-lg
                  object-contain
                  transition-all
                  duration-300
                "
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-7">
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                HAVIT HV-G92 Gamepad
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>

                <span className="text-gray-500 text-sm">(150 Reviews)</span>

                <span className="text-green-600 text-sm font-medium">
                  In Stock
                </span>
              </div>

              {/* Price */}
              <h2 className="text-4xl font-semibold">$192.00</h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed border-b border-gray-200 pb-8">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal. Pressure sensitive.
              </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-5 flex-wrap">
              {/* Counter */}
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={decreaseQty}
                  className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-100
                    transition
                  "
                >
                  <Minus size={18} />
                </button>

                <div className="w-16 flex items-center justify-center font-semibold">
                  {quantity}
                </div>

                <button
                  onClick={increaseQty}
                  className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    bg-[#DB4444]
                    text-white
                  "
                >
                  <Plus size={18} />
                </button>
              </div>

              {/* Buy Button */}
              <button
                className="
                  bg-[#DB4444]
                  hover:bg-[#c83737]
                  text-white
                  px-10
                  h-12
                  rounded-lg
                  font-medium
                  transition
                "
              >
                Buy Now
              </button>

              {/* Wishlist */}
              <button
                className="
                  w-12
                  h-12
                  border
                  border-gray-300
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  hover:bg-black
                  hover:text-white
                  transition
                "
              >
                <Heart size={20} />
              </button>
            </div>

            {/* Delivery Info */}
            <div className="border border-gray-300 rounded-2xl overflow-hidden">
              {/* Delivery */}
              <div className="flex gap-5 p-6">
                <div>
                  <Truck size={35} />
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">Free Delivery</h3>

                  <p className="text-sm text-gray-600">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-300" />

              {/* Return */}
              <div className="flex gap-5 p-6">
                <div>
                  <RotateCcw size={35} />
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">Return Delivery</h3>

                  <p className="text-sm text-gray-600">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-28">
          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>

            <h2 className="text-2xl font-bold">Related Products</h2>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                {/* Image */}
                <div
                  className="
                    relative
                    bg-[#F5F5F5]
                    rounded-3xl
                    overflow-hidden
                    h-[300px]
                  "
                >
                  <img
                    src={MainImage}
                    alt="Product"
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition
                      duration-500
                    "
                  />

                  <button
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-full
                      bg-black
                      text-white
                      py-3
                      translate-y-full
                      group-hover:translate-y-0
                      transition-transform
                      duration-300
                    "
                  >
                    Add To Cart
                  </button>
                </div>

                {/* Content */}
                <div className="pt-5 space-y-2">
                  <h3 className="font-semibold text-lg">
                    RGB Liquid CPU Cooler
                  </h3>

                  <div className="flex items-center gap-3">
                    <span className="text-[#DB4444] font-bold">$160</span>

                    <span className="line-through text-gray-400">$170</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={16} fill="currentColor" />
                      ))}
                    </div>

                    <span className="text-sm text-gray-500">(65)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
