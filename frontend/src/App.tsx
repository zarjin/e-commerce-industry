import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
