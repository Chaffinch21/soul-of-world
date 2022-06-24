import React from "react";
import PhotoItem from "./PhotoItem";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import uniqid from "uniqid";

const Photo = () => {
  const location = useLocation();
  let id = location.state.id;
  const photos = useSelector((state) => {
    const loadPhotoReducer = state;
    return loadPhotoReducer.photos;
  });

  return (
    <div className="container photo-container">
      {photos.map((res) => {
        if (res.id == id) {
          return (
            <div key={uniqid()}>
              <PhotoItem data={res} />
            </div>
          );
        }
      })}
    </div>
  );
};
export default Photo;
