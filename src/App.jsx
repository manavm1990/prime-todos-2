import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import User from "./routes/User/User";

export default function App() {
  const user = "adfasf";

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
          <Route path="/user/:username" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
