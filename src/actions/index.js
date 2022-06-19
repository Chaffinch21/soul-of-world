import {unsplash} from '../unsplash';
import {
  LOAD_PHOTOS
} from './type';

export const loadPhotosAction = (start) => {
  return async dispatch => {
    const response = await unsplash.photos.listPhotos(start, 10, 'latest');
    const jsonData = await response.json();
    dispatch({
      type: LOAD_PHOTOS,
      data: jsonData
    })
  }
}