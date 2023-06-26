import Link from "next/link";
import Layout from "./components/Layout";

export default function Products() {
  return (
    <Layout>
      <Link
        className="bg-green-500 text-white py-1 px-2 rounded-md"
        href={"/products/new"}
      >
        Add Product
      </Link>
    </Layout>
  );
}
