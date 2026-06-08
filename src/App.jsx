import { Routes, Route } from "react-router";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Topbar from "./Components/Common/Topbar";
import Test from "./Components/Common/Test";
import ProductsDetails from "./Components/Products/ProductsDetails";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
