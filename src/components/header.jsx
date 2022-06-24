import React from "react";
import { Link } from "react-router-dom";
import { authenticationUnsplash } from "../unsplash";

export const Header = () => {
  const handleBtn = () => {
    authenticationUnsplash();
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/photos" className="logo"></Link>
      </div>
      <button className="userBtn" onClick={handleBtn}>
        Авторизация
      </button>
    </header>
  );
};
export default Header;
