import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import CartPage from "./pages/cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
