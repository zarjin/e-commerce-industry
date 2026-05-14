import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ShopPage from "./pages/Shop";
import AboutPage from "./pages/About";

export default function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
