import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <p>{auth.currentUser?.displayName}</p>
      <img src={auth.currentUser?.photoURL || ""} width="100" height="100" />
    </>
  );
};
