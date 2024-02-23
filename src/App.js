import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
