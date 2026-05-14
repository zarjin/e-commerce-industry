import {
  Store,
  DollarSign,
  ShoppingBag,
  Wallet,
  Truck,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { FaSquareXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const stats = [
  {
    icon: <Store size={28} />,
    value: "10.5k",
    label: "Sellers active on our site",
  },
  {
    icon: <DollarSign size={28} />,
    value: "33k",
    label: "Monthly Product Sales",
    active: true,
  },
  {
    icon: <ShoppingBag size={28} />,
    value: "45.5k",
    label: "Customers active on our site",
  },
  {
    icon: <Wallet size={28} />,
    value: "25k",
    label: "Annual gross sales on our site",
  },
];

const teamMembers = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
];

const features = [
  {
    icon: <Truck size={30} className="text-white" />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: <Headphones size={30} className="text-white" />,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: <ShieldCheck size={30} className="text-white" />,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white text-black font-sans">
      {/* Hero */}
      <section className="w-full px-4 py-12 md:px-10 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Our Story
              </h1>

              <p className="text-gray-600 leading-relaxed max-w-xl">
                Launched in 2015, Exclusive is South Asia’s premier online
                shopping marketplace with an active presence in Bangladesh.
              </p>

              <p className="text-gray-600 leading-relaxed max-w-xl">
                Exclusive has more than 1 million products to offer and is
                growing rapidly across fashion, electronics, and lifestyle
                categories.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#DB4444]/10 blur-3xl rounded-full" />

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
              alt="Shopping"
              className="relative z-10 w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full px-4 py-10 md:px-10 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group border rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 ${
                stat.active
                  ? "bg-[#DB4444] border-[#DB4444] text-white"
                  : "bg-white border-gray-200 hover:border-[#DB4444]"
              }`}
            >
              <div className="mb-5">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center ${
                    stat.active ? "bg-white/20" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center ${
                      stat.active
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    {stat.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-4xl font-bold tracking-tight">
                {stat.value}
              </h3>

              <p
                className={`mt-3 text-sm leading-relaxed ${
                  stat.active ? "text-white/90" : "text-gray-500"
                }`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="w-full px-4 py-10 md:px-10 md:py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Meet Our Team
            </h2>

            <p className="text-gray-500 mt-4">
              Passionate people behind Exclusive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-[#F1F1F1] rounded-3xl overflow-hidden h-[450px] flex items-end justify-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full object-cover w-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight">
                      {member.name}
                    </h3>

                    <p className="text-gray-500 mt-2">{member.role}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    {[FaSquareXTwitter, FaInstagram, FaLinkedin].map(
                      (Icon, index) => (
                        <button
                          key={index}
                          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                        >
                          <Icon size={18} />
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full px-4 py-14 md:px-10 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6">
                <div className="w-24 h-24 rounded-full bg-gray-300/40 flex items-center justify-center group-hover:scale-105 transition duration-300">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-lg">
                    {feature.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold tracking-wide mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
