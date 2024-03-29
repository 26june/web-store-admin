import { useSession, signIn } from "next-auth/react";
import Nav from "./Nav";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-red-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            className="bg-white p-2 px-4 rounded-lg"
            onClick={() => signIn("google")}
          >
            Login With Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav></Nav>
      <div className="bg-white flex-grow p-4 mt-2 mr-2 mb-2 rounded-lg">
        {children}
      </div>
    </div>
  );
}
