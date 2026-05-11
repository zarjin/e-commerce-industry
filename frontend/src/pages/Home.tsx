import BestSellingProducts from "../components/BestSellingProducts";
import Categories from "../components/Categories";
import FeaturedGrid from "../components/FeaturedGrid";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MusicPromoBannerAds from "../components/MusicPromoBannerAds";
import OurProducts from "../components/OurProducts";
import ServiceFeatures from "../components/ServiceFeatures";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSellingProducts />
      <MusicPromoBannerAds />
      <OurProducts />
      <FeaturedGrid />
      <ServiceFeatures />
      <Footer />
    </>
  );
}
