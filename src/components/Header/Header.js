import { useSession, signIn, signOut } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="px-2 bg-rose-300 pb-5 pt-5">
      <h1>Hy, {session.user.name}. Fetch data to know Fact about cats</h1>
    </div>
  );
};

export default Header;
