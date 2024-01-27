import "./Index.css";
import { useEffect, useState } from "react";
import { getCookie } from "../../utils/cookie";
import { signOut } from "../../api/api";
import { Link } from "react-router-dom";


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const loggedIn = getCookie("access_token") ? true : false;
    console.log(loggedIn);
    setIsLoggedIn(loggedIn);
  }, []);

  const handleSignOut = () => {
    const token = getCookie("refresh_token");
    signOut(token);
  };
  

  return (
    <div className="Header">
      {isLoggedIn ? <p onClick={handleSignOut}>sign out</p> : <Link className="signin-button" to="/">sign in</Link>}
    </div>
  );
};

export default Header;
