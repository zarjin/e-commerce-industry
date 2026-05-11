import Computer from "../assets/Category-Computer.svg";
import Camera from "../assets/Category-Camera.svg";
import Gamepad from "../assets/Category-Gamepad.svg";
import Headphone from "../assets/Category-Headphone.svg";
import SmartWatch from "../assets/Category-SmartWatch.svg";

export default function Categories() {
  const categories = [
    {
      name: "Computer",
      image: Computer,
    },
    {
      name: "Camera",
      image: Camera,
    },
    {
      name: "Gaming",
      image: Gamepad,
    },
    {
      name: "Headphone",
      image: Headphone,
    },
    {
      name: "SmartWatch",
      image: SmartWatch,
    },
  ];

  return (
    <section className="w-full font-sans px-4 py-10 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-4 h-10 bg-[#DB4444] rounded-sm" />

            <h3 className="text-lg md:text-xl font-semibold text-[#DB4444]">
              Categories
            </h3>
          </div>

          <h1 className="font-bold text-2xl md:text-4xl">Browse By Category</h1>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className="
                group
                border
                border-gray-200
                rounded-2xl
                min-h-[180px]
                bg-white
                flex
                flex-col
                items-center
                justify-center
                gap-4
                transition-all
                duration-300
                hover:bg-[#DB4444]
                hover:border-[#DB4444]
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="
                    w-full
                    h-full
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              <h2
                className="
                  text-base
                  md:text-lg
                  font-medium
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                {category.name}
              </h2>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
