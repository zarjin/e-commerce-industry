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
    <section className="w-full font-sans p-10 ">
      <div className="mainContinent ">
        {/* Top Section */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-10 bg-[#DB4444] rounded-sm" />

            <h3 className="text-xl font-semibold text-[#DB4444]">Categories</h3>
          </div>

          <h1 className="font-heading font-bold text-2xl md:text-4xl">
            Browse By Category
          </h1>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mt-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="
                group
                border
                rounded-xl
                h-40
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                transition-all
                duration-300
                hover:bg-[#DB4444]
                hover:text-white
                hover:shadow-lg
              "
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-16 mb-4 transition-transform duration-300 group-hover:scale-110"
              />

              <h2 className="font-medium text-lg">{category.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
