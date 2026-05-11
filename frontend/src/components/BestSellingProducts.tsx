import { Heart, Eye } from "lucide-react";

export default function BestSellingProducts() {
  return (
    <section className="w-full font-sans px-4 py-10 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col gap-3 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-4 h-10 bg-[#DB4444] rounded-sm" />

            <h3 className="text-lg md:text-xl font-semibold text-[#DB4444]">
              This Month
            </h3>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="font-bold text-2xl md:text-4xl">
              Best Selling Products
            </h1>

            <button className="bg-[#DB4444] text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
              View All
            </button>
          </div>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          <div className="group rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="relative bg-[#F5F5F5] h-[320px] flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop"
                alt="Nike Shoe"
              />

              {/* Icons */}
              <div className="absolute top-4 right-4 flex flex-col gap-3">
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:bg-black hover:text-white transition">
                  <Heart size={18} />
                </button>

                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:bg-black hover:text-white transition">
                  <Eye size={18} />
                </button>
              </div>

              {/* Add To Cart */}
              <button className="absolute bottom-0 left-0 w-full bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition duration-300">
                Add To Cart
              </button>
            </div>

            {/* Product Info */}
            <div className="pt-4 space-y-2">
              <h2 className="text-lg font-semibold">The north coat</h2>

              <div className="flex items-center gap-3">
                <span className="text-[#DB4444] font-semibold">$260</span>

                <span className="text-gray-400 line-through">$360</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">★★★★★</div>

                <span className="text-gray-500 text-sm">(65)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
