import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  // States for AddProduct functionality
  const [values, setValues] = useState({ name: "", price: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showAddProduct, setShowAddProduct] = useState(true); // State to toggle views

  // States for Display 
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch products
  const fetchProducts = () => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setData(res.data))
      .catch(() => alert("Error fetching product data."));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const api = "http://localhost:3000/products";
      const checkResponse = await axios.get(`${api}?name=${values.name}`);
      if (checkResponse.data.length > 0) {
        setError("Product with this name already exists.");
        return;
      }
      await axios.post(api, values);
      setMessage("Product added successfully!");
      setValues({ name: "", price: "" });
      fetchProducts(); // Refresh the product list
      setTimeout(() => setShowAddProduct(false), 2000); // Switch to Product List
    } catch (error) {
      console.error(error);
      setError("An error occurred while adding the product.");
    }
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container p-5">
      <div className="text-center mb-5">
        <h2 className="text-danger display-4">Welcome To Home Page</h2>
      </div>

      {showAddProduct ? (
        <div className="row justify-content-center">
          {/* Add Product Section */}
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title mb-4">Add Product</h3>
                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Product Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={values.name}
                      onChange={(e) =>
                        setValues({ ...values, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={values.price}
                      onChange={(e) =>
                        setValues({ ...values, price: e.target.value })
                      }
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Add Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
        {/* Display Products Section */}
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title mb-4 text-center">Product List</h3>
              <input
                type="text"
                className="form-control mb-4"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {filteredData.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>${item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-center">No products found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      )}
    </div>
  );
};

export default Home;
