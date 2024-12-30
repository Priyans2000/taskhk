import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [values, setValues] = useState({ name: "", price: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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
    } catch (error) {
      console.error(error);
      setError("An error occurred while adding the product.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h3>Add Product</h3>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Product Name:</label>
          <input
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Price:</label>
          <input
            type="text"
            value={values.price}
            onChange={(e) => setValues({ ...values, price: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
            }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
