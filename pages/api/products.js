import { Product } from "@/models/Product";
import { mongooseConnect } from "../lib/mongoose";

export default async function handleProducts(req, res) {
  const { method } = req;
  //CONNECTING TO THE MONGODB DATABASE
  await mongooseConnect();
  if (method === "POST") {
    const { productName, productDescription, productPrice } = req.body;
    const productDetails = await Product.create({
      productName,
      productDescription,
      productPrice,
    });
    res.json(productDetails);
  }
}
