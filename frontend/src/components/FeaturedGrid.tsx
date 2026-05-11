import Playstation from "../assets/Playstation.svg";
import Wearing from "../assets/Wearing-hat.svg";
import Speakers from "../assets/Speakers.svg";
import Perfume from "../assets/Perfume.svg";

const FeaturedGrid = () => {
  return (
    <section className="w-full px-4 py-10 md:px-10 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-10 bg-[#DB4444] rounded-sm" />

            <h3 className="text-[#DB4444] font-semibold text-lg">Featured</h3>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            New Arrival
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
          {/* PlayStation */}
          <div
            className="
              md:col-span-2
              md:row-span-2
              relative
              min-h-[600px]
              bg-black
              rounded-3xl
              overflow-hidden
              group
              flex
              items-end
              p-8
            "
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

            <img
              src={Playstation}
              alt="PlayStation 5"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-contain
                object-bottom
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div className="relative z-20 max-w-[280px] space-y-4">
              <h2 className="text-3xl font-bold">PlayStation 5</h2>

              <p className="text-gray-300 leading-relaxed">
                Black and White version of the PS5 coming out on sale.
              </p>

              <button
                className="
                  relative
                  inline-block
                  font-medium
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-full
                  after:h-[2px]
                  after:bg-white
                "
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Women's Collection */}
          <div
            className="
              md:col-span-2
              relative
              min-h-[285px]
              bg-black
              rounded-3xl
              overflow-hidden
              group
              flex
              items-end
              p-8
            "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />

            <img
              src={Wearing}
              alt="Women's Collection"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                object-right
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div className="relative z-20 max-w-[260px] space-y-3">
              <h2 className="text-2xl font-bold">Women's Collections</h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                Featured woman collections that give you another vibe.
              </p>

              <button className="relative inline-block font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white">
                Shop Now
              </button>
            </div>
          </div>

          {/* Speakers */}
          <div
            className="
              relative
              min-h-[285px]
              bg-black
              rounded-3xl
              overflow-hidden
              group
              flex
              items-end
              p-6
            "
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

            <img
              src={Speakers}
              alt="Speakers"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-contain
                p-5
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div className="relative z-20 space-y-2">
              <h2 className="text-2xl font-bold">Speakers</h2>

              <p className="text-sm text-gray-300">Amazon wireless speakers</p>

              <button className="relative inline-block text-sm font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white">
                Shop Now
              </button>
            </div>
          </div>

          {/* Perfume */}
          <div
            className="
              relative
              min-h-[285px]
              bg-black
              rounded-3xl
              overflow-hidden
              group
              flex
              items-end
              p-6
            "
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

            <img
              src={Perfume}
              alt="Perfume"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-contain
                p-5
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div className="relative z-20 space-y-2">
              <h2 className="text-2xl font-bold">Perfume</h2>

              <p className="text-sm text-gray-300">GUCCI INTENSE OUD EDP</p>

              <button className="relative inline-block text-sm font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;
