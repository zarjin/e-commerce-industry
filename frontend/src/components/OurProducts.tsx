import { Heart, Eye, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=880&auto=format&fit=crop",
    price: 100,
    rating: 5,
    reviews: 35,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=880&auto=format&fit=crop",
    price: 360,
    rating: 4,
    reviews: 95,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=880&auto=format&fit=crop",
    price: 700,
    rating: 5,
    reviews: 325,
  },
  {
    id: 4,
    name: "Curology Product Set",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=880&auto=format&fit=crop",
    price: 500,
    rating: 4,
    reviews: 145,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=880&auto=format&fit=crop",
    price: 960,
    rating: 5,
    reviews: 65,
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=880&auto=format&fit=crop",
    price: 1160,
    rating: 5,
    reviews: 35,
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    image:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=880&auto=format&fit=crop",
    price: 660,
    rating: 4,
    reviews: 55,
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=880&auto=format&fit=crop",
    price: 660,
    rating: 5,
    reviews: 55,
  },
];

export default function OurProducts() {
  return (
    <section className="w-full px-4 py-10 md:px-10 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-4 h-10 bg-[#DB4444] rounded-sm" />

            <h3 className="text-[#DB4444] font-semibold text-lg md:text-xl">
              Our Products
            </h3>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Explore Our Products
            </h1>

            <button
              className="
                bg-[#DB4444]
                hover:bg-red-600
                text-white
                px-6
                py-3
                rounded-xl
                font-medium
                transition-all
                duration-300
                hover:scale-105
              "
            >
              View All Products
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Image */}
              <div
                className="
                  relative
                  bg-[#F5F5F5]
                  rounded-2xl
                  overflow-hidden
                  h-[320px]
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />

                {/* Icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-3">
                  <button
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow-md
                      hover:bg-black
                      hover:text-white
                      transition
                    "
                  >
                    <Heart size={18} />
                  </button>

                  <button
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow-md
                      hover:bg-black
                      hover:text-white
                      transition
                    "
                  >
                    <Eye size={18} />
                  </button>
                </div>

                {/* Add To Cart */}
                <button
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    bg-black
                    text-white
                    py-3
                    font-medium
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform
                    duration-300
                  "
                >
                  Add To Cart
                </button>
              </div>

              {/* Product Info */}
              <div className="pt-5 space-y-2">
                <h2 className="font-semibold text-lg line-clamp-1">
                  {product.name}
                </h2>

                <div className="flex items-center gap-3">
                  <span className="text-[#DB4444] font-bold">
                    ${product.price}
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

        {/* Bottom Button */}
        <div className="flex justify-center mt-14">
          <button
            className="
              bg-[#DB4444]
              hover:bg-red-600
              text-white
              px-10
              py-4
              rounded-xl
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
