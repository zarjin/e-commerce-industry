import React from "react";

/**
 * Cart Page Component
 * Recreates the UI from "Frame 807.png" using Tailwind CSS.
 */
const Cart: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 font-sans text-black">
      {/* Table Header */}
      <div className="mb-10 flex items-center justify-between rounded-sm bg-white px-10 py-6 shadow-sm">
        <span className="w-1/4 text-base font-normal">Product</span>
        <span className="w-1/4 text-center text-base font-normal">Price</span>
        <span className="w-1/4 text-center text-base font-normal">
          Quantity
        </span>
        <span className="w-1/4 text-right text-base font-normal">Subtotal</span>
      </div>

      {/* Cart Items */}
      <div className="space-y-10">
        {/* Item 1: LCD Monitor */}
        <div className="flex items-center justify-between rounded-sm bg-white px-10 py-6 shadow-sm">
          <div className="flex w-1/4 items-center gap-5">
            <div className="relative h-14 w-14">
              <img
                src="/monitor.png"
                alt="LCD Monitor"
                className="h-full w-full object-contain"
              />
              {/* Delete Icon */}
              <button className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#DB4444] text-white">
                <span className="text-[10px]">✕</span>
              </button>
            </div>
            <span className="text-base font-normal">LCD Monitor</span>
          </div>
          <span className="w-1/4 text-center text-base font-normal">$650</span>
          <div className="flex w-1/4 justify-center">
            <div className="flex h-12 w-16 items-center justify-between rounded border border-gray-300 px-3">
              <span>01</span>
              <div className="flex flex-col text-[10px]">
                <button>▲</button>
                <button>▼</button>
              </div>
            </div>
          </div>
          <span className="w-1/4 text-right text-base font-normal">$650</span>
        </div>

        {/* Item 2: H1 Gamepad */}
        <div className="flex items-center justify-between rounded-sm bg-white px-10 py-6 shadow-sm">
          <div className="flex w-1/4 items-center gap-5">
            <div className="h-14 w-14">
              <img
                src="/gamepad.png"
                alt="H1 Gamepad"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-base font-normal">H1 Gamepad</span>
          </div>
          <span className="w-1/4 text-center text-base font-normal">$550</span>
          <div className="flex w-1/4 justify-center">
            <div className="flex h-12 w-16 items-center justify-between rounded border border-gray-300 px-3">
              <span>02</span>
              <div className="flex flex-col text-[10px]">
                <button>▲</button>
                <button>▼</button>
              </div>
            </div>
          </div>
          <span className="w-1/4 text-right text-base font-normal">$1100</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-between">
        <button className="rounded border border-black px-12 py-4 text-base font-medium transition-colors hover:bg-black hover:text-white">
          Return To Shop
        </button>
        <button className="rounded border border-black px-12 py-4 text-base font-medium transition-colors hover:bg-black hover:text-white">
          Update Cart
        </button>
      </div>

      {/* Bottom Section: Coupon & Cart Total */}
      <div className="mt-20 flex flex-wrap justify-between gap-10">
        {/* Coupon Input */}
        <div className="flex h-14 items-start gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="h-full w-72 rounded border border-black px-6 outline-none"
          />
          <button className="h-full rounded bg-[#DB4444] px-12 text-base font-medium text-white hover:bg-[#c23b3b]">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total Card */}
        <div className="w-[470px] rounded border-2 border-black p-8">
          <h3 className="mb-6 text-xl font-medium">Cart Total</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-300 pb-4">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between pt-2">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="rounded bg-[#DB4444] px-12 py-4 text-base font-medium text-white hover:bg-[#c23b3b]">
              Procees to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
