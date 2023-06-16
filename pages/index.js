import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Layout from "./components/Layout";

export default function Home() {
  return <Layout>Home / Dashboard</Layout>;
}
