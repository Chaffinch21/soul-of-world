import { unsplash } from "../../unsplash";
import { LOAD_PHOTOS, LIKE_PHOTO, DISLIKE_PHOTO } from "../../constants";
let loadingImages = false;
export const loadPhotosAction = (start) => {
  return async (dispatch) => {
    if (!loadingImages) {
      loadingImages = true;
      const response = await unsplash.photos.listPhotos(start, 10, "latest");
      const jsonData = await response.json();
      if (jsonData.length > 0) {
        loadingImages = false;
      }
      dispatch({
        type: LOAD_PHOTOS,
        data: jsonData,
      });
    }
  };
};

export const likeAction = (id) => {
  return async (dispatch) => {
    const response = await unsplash.photos.likePhoto(id);
    const jsonData = await response.json();
    dispatch({
      type: LIKE_PHOTO,
      data: jsonData,
    });
  };
};

export const dislikeAction = (id) => {
  return async (dispatch) => {
    const response = await unsplash.photos.unlikePhoto(id);
    const jsonData = await response.json();
    dispatch({
      type: DISLIKE_PHOTO,
      data: jsonData,
    });
  };
};
