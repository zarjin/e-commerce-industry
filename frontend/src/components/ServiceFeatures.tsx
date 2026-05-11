import { Truck, Headphones, ShieldCheck } from "lucide-react";

const ServiceFeatures = () => {
  const features = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: ShieldCheck,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-10
            md:gap-16
            text-center
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  flex
                  flex-col
                  items-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  {/* Outer Circle */}
                  <div
                    className="
                      w-24
                      h-24
                      rounded-full
                      bg-gray-300/40
                      flex
                      items-center
                      justify-center
                      transition
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    {/* Inner Circle */}
                    <div
                      className="
                        w-16
                        h-16
                        rounded-full
                        bg-black
                        flex
                        items-center
                        justify-center
                        shadow-lg
                      "
                    >
                      <Icon
                        size={30}
                        className="text-white"
                        strokeWidth={2.2}
                      />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <h3
                  className="
                    text-lg
                    md:text-xl
                    font-semibold
                    tracking-wide
                    mb-2
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    text-sm
                    text-gray-600
                    leading-relaxed
                    max-w-[250px]
                  "
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
