import "./Index.css";
import { useEffect, useState } from "react";
import { getCookie, removeCookie } from "../../utils/cookie";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = getCookie("access_token") ? true : false;
    console.log(loggedIn);
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div className="Header">
      {isLoggedIn ? <p>sign out</p> : <p>sign in</p>}
    </div>
  );
};

export default Header;
