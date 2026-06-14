import { Routes, Route } from "react-router";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Topbar from "./Components/Common/Topbar";
import Test from "./Components/Common/Test";
import ProductsDetails from "./Components/Products/ProductsDetails";
import { createContext, useState } from "react";
import Cart from "./Components/Cart/Cart";
import { Toaster } from "sonner";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Toaster />

      <CartContext value={[cart, setCart]}>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </CartContext>
    </div>
  );
}

export default App;
