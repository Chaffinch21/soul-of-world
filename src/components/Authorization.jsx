import React from "react";
import { getToken } from "../unsplash";
import { Link } from "react-router-dom";

const Authorization = () => {
  window.onload = function () {
    document.querySelector(".userBtn").textContent = "Вы авторизованы";
    document.querySelector(".userBtn").classList.add("login");
  };

  const saveMe = () => {
    getToken();
  };
  return (
    <div className="container container-Gl scroll-unload">
      <Link to="/photos" className="saveMe-btn" onClick={saveMe}>
        Запомнить меня
      </Link>
    </div>
  );
};

export default Authorization;
