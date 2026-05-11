import { Link } from "react-router";

export default function TopHeader() {
  return (
    <div className="w-full bg-black text-white">
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          py-3
          flex
          items-center
          justify-center
        "
      >
        <p
          className="
            text-center
            text-xs
            sm:text-sm
            md:text-base
            font-medium
            tracking-wide
            leading-relaxed
          "
        >
          <span className="text-gray-200">
            Summer Sale For All Swim Suits And Free Express Delivery — OFF 50%!
          </span>

          <Link
            to="/shop"
            className="
              ml-2
              inline-flex
              items-center
              font-semibold
              underline
              underline-offset-4
              hover:text-[#DB4444]
              transition-colors
              duration-300
            "
          >
            Shop Now
          </Link>
        </p>
      </div>
    </div>
  );
}
