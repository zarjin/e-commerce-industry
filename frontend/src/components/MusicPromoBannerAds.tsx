import JBL from "../assets/JBL.svg";

const MusicPromoBannerAds = () => {
  const countdownItems = [
    { label: "Days", value: "05" },
    { label: "Hours", value: "23" },
    { label: "Minutes", value: "59" },
    { label: "Seconds", value: "35" },
  ];

  return (
    <section className="w-full px-4 py-10 md:px-10 md:py-20 font-sans">
      <div
        className="
          max-w-7xl
          mx-auto
          bg-black
          text-white
          rounded-3xl
          overflow-hidden
          px-6
          py-10
          md:px-16
          md:py-20
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-14
          relative
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            w-[400px]
            h-[400px]
            bg-white/10
            blur-[140px]
            rounded-full
          "
        />

        {/* Left Content */}
        <div className="relative z-10 flex-1 space-y-8">
          <span className="text-[#00FF66] font-semibold tracking-wide uppercase">
            Categories
          </span>

          <h1
            className="
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
              tracking-tight
              max-w-xl
            "
          >
            Enhance Your Music Experience
          </h1>

          {/* Timer */}
          <div className="flex flex-wrap gap-4">
            {countdownItems.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  text-black
                  w-20
                  h-20
                  md:w-24
                  md:h-24
                  rounded-full
                  flex
                  flex-col
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <span className="text-xl font-bold leading-none">
                  {item.value}
                </span>

                <span className="text-xs font-medium mt-1">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            className="
              bg-[#00FF66]
              hover:bg-[#00e65c]
              text-black
              px-10
              py-4
              rounded-xl
              font-bold
              text-lg
              transition-all
              duration-300
              hover:scale-105
              shadow-lg
            "
          >
            Buy Now
          </button>
        </div>

        {/* Right Image */}
        <div className="relative z-10 flex-1 flex justify-center">
          <img
            src={JBL}
            alt="JBL Speaker"
            className="
              w-full
              max-w-xl
              object-contain
              drop-shadow-[0_20px_80px_rgba(255,255,255,0.25)]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default MusicPromoBannerAds;
