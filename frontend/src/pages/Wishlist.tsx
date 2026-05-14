import React from "react";

/**
 * Wishlist Page Component
 * Recreates the clean, minimalist UI style from the "Frame 760.png" reference,
 * focusing on high-contrast typography and the specific red brand color (#DB4444).
 */
const Wishlist: React.FC = () => {
  // Mock data for the wishlist items
  const wishlistItems = [
    {
      id: 1,
      name: "Gucci duffle bag",
      price: 960,
      originalPrice: 1160,
      discount: "-40%",
      image: "/bag.png",
    },
    {
      id: 2,
      name: "RGB liquid CPU Cooler",
      price: 160,
      originalPrice: null,
      discount: null,
      image: "/cooler.png",
    },
    {
      id: 3,
      name: "GP11 Gamepad",
      price: 550,
      originalPrice: null,
      discount: null,
      image: "/gamepad.png",
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: 750,
      originalPrice: null,
      discount: null,
      image: "/jacket.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-20 lg:px-32">
      {/* Header Section */}
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-xl font-normal text-black">
          Wishlist ({wishlistItems.length})
        </h2>
        <button className="rounded border border-black px-12 py-4 text-base font-medium transition-colors hover:bg-black hover:text-white">
          Move All To Bag
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {wishlistItems.map((item) => (
          <div key={item.id} className="group flex flex-col">
            {/* Image Container */}
            <div className="relative flex h-[250px] w-full items-center justify-center bg-[#F5F5F5] p-10">
              {item.discount && (
                <span className="absolute left-3 top-3 rounded bg-[#DB4444] px-3 py-1 text-xs text-white">
                  {item.discount}
                </span>
              )}

              <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:scale-110">
                <TrashIcon />
              </button>

              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-contain mix-blend-multiply"
              />

              {/* Add to Cart Overlay */}
              <button className="absolute bottom-0 flex w-full items-center justify-center gap-2 bg-black py-2 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                <CartIcon />
                Add To Cart
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-4 space-y-2">
              <h3 className="text-base font-medium text-black">{item.name}</h3>
              <div className="flex items-center gap-3">
                <span className="text-base font-medium text-[#DB4444]">
                  ${item.price}
                </span>
                {item.originalPrice && (
                  <span className="text-base font-medium text-gray-400 line-through">
                    ${item.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simple SVG Icons
const TrashIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6" />
  </svg>
);

const CartIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export default Wishlist;
