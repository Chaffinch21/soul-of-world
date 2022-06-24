import React from "react";
import { Link } from "react-router-dom";
import { likeAction, dislikeAction } from "../redux/actions";
import { useDispatch } from "react-redux";

const PhotoItem = (data, key) => {
  const dispatch = useDispatch();
  const code = window.location.pathname;
  const likeToggle = (id) => {
    try {
      if (!data.data.liked_by_user) {
        dispatch(likeAction(id));
        document.querySelector(".card-reiting").classList.add("like");
      } else {
        dispatch(dislikeAction(id));
        document.querySelector(".card-reiting").classList.remove("like");
      }
    } catch (err) {
      alert("Пройдите авторизацию еще раз, пожалуйста!");
    }
  };

  return (
    <div className="photo-card card">
      {code === "/photo" && (
        <img src={data.data.urls.full} alt={data.data.description} />
      )}

      {code === "/photos" && (
        <Link to="/photo" state={{ id: data.data.id }} className="card-link">
          <img src={data.data.urls.small} alt={data.data.description} />
        </Link>
      )}
      <div className="card-wrap">
        <a
          href={data.data.user.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-text card-link"
        >
          {data.data.user.name}
        </a>

        {data.data.liked_by_user && (
          <button
            type="button"
            className="btn card-reiting like"
            onClick={() => likeToggle(data.data.id)}
          >
            {data.data.likes}
          </button>
        )}

        {!data.data.liked_by_user && (
          <button
            type="button"
            className="btn card-reiting"
            onClick={() => likeToggle(data.data.id)}
          >
            {data.data.likes}
          </button>
        )}
      </div>
      <p className="card-date">{data.data.date}</p>
      {code === "/photo" && (
        <Link to="/photos" className="card-link">
          Назад
        </Link>
      )}
    </div>
  );
};

export default PhotoItem;
