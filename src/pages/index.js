import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [logged, setLogged] = useState("");
  const [main, setMain] = useState(false);
  const [logout, setLogout] = useState("");
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  const loginHandler = () => {
    if (session == undefined) {
      signIn();
    } else {
      setLogged("You are logged in");
      setMain(true);
    }
    setMain(true);
  };

  const logoutHandler = () => {
    signOut();
    setLogout("You are logged out");
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-[300px] border-solid">
        <button
          className="text-2xl bg-sky-500 px-1 py-1"
          style={{ border: "1px solid black", borderRadius: "12px" }}
          onClick={loginHandler}
        >
          Login with Google
        </button>
      </div>
      <div className="flex items-center justify-center mt-[20px] border-solid">
        <button
          className="text-2xl bg-sky-500 px-12 py-1"
          style={{ border: "1px solid black", borderRadius: "12px" }}
          onClick={logoutHandler}
        >
          Sign Out
        </button>
      </div>
      <div className="flex items-center justify-center mt-[40px] text-3xl">
        {logged}
      </div>
      <div className="flex items-center justify-center mt-[40px] text-3xl">
        {logout}
      </div>

      {main && (
        <div
          className="flex items-center justify-center mt-[40px] text-3xl cursor-pointer"
          onClick={() => router.push("/main")}
        >
          <p>Go to the main page</p>
        </div>
      )}
    </div>
  );
};

export default Home;
