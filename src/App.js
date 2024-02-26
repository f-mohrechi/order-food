import { Route, Routes } from "react-router-dom";
import { Home, Login, Register, Error } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
