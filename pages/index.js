import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Layout from "./components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="flex text-blue-900 justify-between">
        <h2>
          Hello, <b>{session?.user.name}</b>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img
            src={session?.user.image}
            alt="Profile Picture"
            className="h-6 w-6"
          ></img>
          <span className="px-2">{session?.user.name}</span>
        </div>
      </div>
    </Layout>
  );
}
