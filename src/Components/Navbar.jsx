
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-between align-items-center  bg-white border-bottom fixed-top w-100 shadow-sm">
      <img
        src="logo.png"
        className="img-fluid rounded-circle"
        style={{ width: "80px" }}
        alt="Logo"
      />
      <button
        onClick={handleLogout}
        className="btn btn-danger btn-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
