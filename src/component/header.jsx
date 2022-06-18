import React from "react";
import { authenticationUnsplash } from "../unsplash";
import { AUTHORIZATION_URL } from "../const";
import { getToken } from '../unsplash';

export const Header = () => {
  const handleBtn =() => {
    authenticationUnsplash();
    getToken();
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