import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div
      className="d-flex flex-column bg-danger text-white vh-100 p-4"
      style={{
        width: "280px",
        position: "fixed",
        boxShadow: "3px 0 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2 className="text-center mb-5 border-bottom pb-3 fw-bold">Dashboard</h2>
      <ul className="nav flex-column gap-3">
        <li className="nav-item">
          <Link
            to="/home"
            className="nav-link text-white d-flex align-items-center gap-2 hover-effect"
          >
            <i className="bi bi-house-door"></i> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/display"
            className="nav-link text-white d-flex align-items-center gap-2 hover-effect"
          >
            <i className="bi bi-house-door"></i> Display
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
