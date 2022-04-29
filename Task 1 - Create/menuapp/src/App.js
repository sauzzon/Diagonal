import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Menu from "./pages/menu";
import Orders from "./pages/orders";
import NotFound from "./pages/notfound";
import AppBar from "./components/appbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <AppBar></AppBar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
