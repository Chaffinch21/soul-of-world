import React from "react";
import { authenticationUnsplash } from "../unsplash";

export const Header = () => {
  const handleBtn =() => {
    authenticationUnsplash();
  }
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">

        </a>
      </div>
      <button className="userBtn" onClick={handleBtn}>
      </button>
    </header>
  )
}
export default Header;