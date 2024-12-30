import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Menubar from "./Components/Menubar";
import Navbar from "./Components/Navbar";

const Layout = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Menubar />
        <div className="flex-grow-1 p-4 ms-280">
          <div className="container-fluid mt-4">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
