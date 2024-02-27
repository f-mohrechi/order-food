import { Route, Routes } from "react-router-dom";
import { Home, Login, Register, Error, Logout } from "./pages";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
