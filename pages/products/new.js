import axios from "axios";
import { useState } from "react";
import Layout from "../components/Layout";

export default function NewProduct() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  async function createProduct(e) {
    e.preventDefault();
    //POST TO UPDATE THE LIST OF PRODUCTS
    const data = { productName, productDescription, productPrice };

    await axios.post("/api/products", data);
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>
        <label>Product Name</label>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        ></input>
        <label>Description</label>
        <textarea
          placeholder="Description..."
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        ></textarea>
        <label>Price (GBP)</label>
        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        ></input>
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
}
