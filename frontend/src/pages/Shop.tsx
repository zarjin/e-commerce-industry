import { Heart, Eye, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1200&auto=format&fit=crop",
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop",
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
  },
  {
    id: 4,
    name: "RGB Gaming Chair",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop",
    price: 450,
    oldPrice: 520,
    rating: 4,
    reviews: 62,
  },
  {
    id: 5,
    name: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    price: 220,
    oldPrice: 260,
    rating: 5,
    reviews: 120,
  },
  {
    id: 6,
    name: "Smart Watch Series 8",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    price: 650,
    oldPrice: 700,
    rating: 4,
    reviews: 53,
  },
  {
    id: 7,
    name: "Canon DSLR Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    price: 850,
    oldPrice: 920,
    rating: 5,
    reviews: 71,
  },
  {
    id: 8,
    name: "Nike Air Max",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    price: 180,
    oldPrice: 240,
    rating: 4,
    reviews: 90,
  },
];

export default function ShopPage() {
  return (
    <main className="w-full bg-white font-sans">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Explore Our Shop
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover premium electronics, fashion, accessories, and gaming
            products carefully selected for modern lifestyles.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full px-4 py-8 md:px-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {["All", "Gaming", "Fashion", "Electronics", "Lifestyle"].map(
              (item, index) => (
                <button
                  key={index}
                  className="px-5 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition"
                >
                  {item}
                </button>
              ),
            )}
          </div>

          <select className="border border-gray-300 rounded-xl px-4 py-2 outline-none">
            <option>Sort by Latest</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
            <option>Best Rating</option>
          </select>
        </div>
      </section>

      {/* Products */}
      <section className="w-full px-4 py-12 md:px-10 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Image */}
              <div className="relative bg-[#F5F5F5] rounded-3xl overflow-hidden h-[320px] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Discount */}
                <span className="absolute top-4 left-4 bg-[#DB4444] text-white text-xs font-medium px-3 py-1 rounded-full">
                  -20%
                </span>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-3">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-black hover:text-white transition">
                    <Heart size={18} />
                  </button>

                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-black hover:text-white transition">
                    <Eye size={18} />
                  </button>
                </div>

                {/* Cart */}
                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Add To Cart
                </button>
              </div>

              {/* Content */}
              <div className="pt-5 space-y-2">
                <h2 className="text-lg font-semibold line-clamp-1">
                  {product.name}
                </h2>

                <div className="flex items-center gap-3">
                  <span className="text-[#DB4444] font-bold">
                    ${product.price}
                  </span>

                  <span className="text-gray-400 line-through text-sm">
                    ${product.oldPrice}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-yellow-400">
                    {Array.from({ length: product.rating }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <span className="text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
