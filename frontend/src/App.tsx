import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
