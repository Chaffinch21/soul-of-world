import React from "react";
import PhotoItem from "./PhotoItem";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotosAction } from "../redux/actions";
import uniqid from "uniqid";
import { useEffect } from "react";

let start = 1;
const ListPhoto = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotosAction(start));
    start = start + 1;
  }, []);

  const loadHandler = (ev) => {
    dispatch(loadPhotosAction(start));
    ev.preventDefault();
    start = start + 1;
  };

  window.addEventListener("scroll", function () {
    if (document.querySelector(".list-container")) {
      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (window.innerHeight + scrolled >= document.body.clientHeight - 100) {
        dispatch(loadPhotosAction(start));
        start = start + 1;
      }
    }
  });

  const photos = useSelector((state) => {
    const loadPhotoReducer = state;
    return loadPhotoReducer.photos;
  });

  return (
    <div className="list-container">
      <ul className="photos-list">
        {photos.map((res) => {
          return (
            <li className="photos-item" key={uniqid()}>
              <PhotoItem data={res} />
            </li>
          );
        })}
      </ul>
      <button onClick={loadHandler} className="btn-load">
        Загрузить фотографии
      </button>
    </div>
  );
};

export default ListPhoto;
