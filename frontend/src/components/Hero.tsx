import Apple from "../assets/Apple.png";
import Google from "../assets/Google_Pixel.png";
import Samsung from "../assets/Samsung_Galaxy.png";
import Sony from "../assets/Sony.png";
import DJI from "../assets/DJI.png";

import { ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const brands = [
    "Google Pixel",
    "Apple iPhones",
    "Samsung Galaxy",
    "Sony",
    "DJI",
    "PlayStation",
    "PC Components",
  ];

  const slides = [
    {
      image: Apple,
    },
    {
      image: Google,
    },
    {
      image: Samsung,
    },
    {
      image: Sony,
    },
    {
      image: DJI,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col border border-gray-200 rounded-2xl p-5 bg-white">
          {brands.map((brand, index) => (
            <button
              key={index}
              className="
                flex
                items-center
                justify-between
                py-3
                border-b
                last:border-none
                text-left
                group
              "
            >
              <span className="font-medium group-hover:text-[#DB4444] transition">
                {brand}
              </span>

              <ChevronRight
                size={18}
                className="opacity-0 group-hover:opacity-100 group-hover:text-[#DB4444] transition"
              />
            </button>
          ))}
        </div>

        {/* Hero Slider */}
        <div className="lg:col-span-3">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="rounded-3xl overflow-hidden"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[300px] md:h-[450px]">
                  {/* Image */}
                  <img
                    src={slide.image}
                    className="w-full h-full object-cover "
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-14 text-white"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
