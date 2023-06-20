import Layout from "./components/Layout";
import { signOut } from "next-auth/react";

export default function Settings() {
  return (
    <Layout>
      <button
        className="bg-red-400 p-2 px-4 rounded-lg "
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </Layout>
  );
}
