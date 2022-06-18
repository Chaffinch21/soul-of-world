import {unsplash} from '../unsplash';
import {
  LOAD_PHOTOS
} from './type';

export const loadPhotosAction = (start, end) => {
  return async dispatch => {
    const response = await unsplash.photos.listPhotos(start, end, 'latest');
    const jsonData = await response.json();
    dispatch({
      type: LOAD_PHOTOS,
      data: jsonData
    })
    console.log(jsonData);
  }
}