import "./Index.css";
import { useEffect, useState } from "react";
import { getCookie, removeCookie } from "../../utils/cookie";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getCookie("access_token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="Header">
      <p>sign out</p>
    </div>
  );
};

export default Header;
