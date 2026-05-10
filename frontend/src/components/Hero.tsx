import Apple from "../assets/Apple.png";
import Google from "../assets/Google_Pixel.png";
import Samsung from "../assets/Samsung_Galaxy.png";
import Sony from "../assets/Sony.png";
import DJI from "../assets/DJI.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  const brands = [
    "Google Pixel",
    "Apple iPhones",
    "Samsung Galaxy",
    "Sony",
    "DJI",
    "PlayStation",
    "Pc Components",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Left Brand Section */}
        <div className="border rounded-2xl p-5 space-y-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="border-b pb-2 cursor-pointer hover:text-red-500 duration-300"
            >
              <h3 className="font-medium">{brand}</h3>
            </div>
          ))}
        </div>

        {/* Right Slider */}
        <div className="lg:col-span-3">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            className="rounded-2xl overflow-hidden"
          >
            <SwiperSlide>
              <img
                src={Apple}
                alt="apple"
                className="w-full h-[250px] md:h-[400px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Google}
                alt="google"
                className="w-full h-[250px] md:h-[400px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Samsung}
                alt="samsung"
                className="w-full h-[250px] md:h-[400px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Sony}
                alt="sony"
                className="w-full h-[250px] md:h-[400px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={DJI}
                alt="dji"
                className="w-full h-[250px] md:h-[400px] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
