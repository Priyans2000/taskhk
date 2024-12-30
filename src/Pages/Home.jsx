
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="container-fluid p-5 vh-100"  style={{ backgroundColor: "#f8f9fa" }}>
      <div className="text-center mb-5">
        <h2 className="text-primary display-4">Welcome To Home Page</h2>
       
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-10  col-lg-8">
          <img
            src="banner.webp"
            className="img-fluid rounded shadow-lg"
            alt="Fashion Banner"
            style={{ width: "100%", height: "auto",marginLeft:"30px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
