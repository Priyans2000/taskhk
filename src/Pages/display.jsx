import axios from "axios";
import React, { useEffect, useState } from "react";

const Display = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setData(res.data))
      .catch(() => alert("Error fetching product data."));
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "20px",
          border: "1px solid #ccc",
        }}
      />
      {filteredData.length > 0 ? (
        <table style={{ width: "100%", border: "1px solid #ccc" }}>
          <thead>
            <tr>
              <th style={{ padding: "8px", border: "1px solid #ccc" }}>ID</th>
              <th style={{ padding: "8px", border: "1px solid #ccc" }}>Name</th>
              <th style={{ padding: "8px", border: "1px solid #ccc" }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>{item.id}</td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>{item.name}</td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Display;
