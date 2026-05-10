import { Link } from "react-router";

export default function TopHeader() {
  return (
    <div className="w-full bg-black text-white">
      <div className="mx-auto flex items-center justify-center px-3 py-2 md:px-6">
        <h1 className="text-center text-xs font-medium leading-relaxed sm:text-sm md:text-base">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>

          <Link
            to="/shop"
            className="ml-2 inline-block font-semibold underline underline-offset-4 transition hover:text-gray-300"
          >
            Shop Now
          </Link>
        </h1>
      </div>
    </div>
  );
}
