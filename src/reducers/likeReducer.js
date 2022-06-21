
import {LIKE_PHOTO, DISLIKE_PHOTO} from '../actions/type'
const initialState = {
  likes: []
};
// const initialState = [];

export const likeReducer = (state=initialState, action) => {
  switch(action.type) {
      case LIKE_PHOTO:
          const likePhoto= action.data.photo;
          console.log('like', likePhoto);
          return {
            likePhoto
          }

        case DISLIKE_PHOTO:
          const dislikePhoto= action.data.photo;
          console.log('dislike', dislikePhoto);
          return {
            dislikePhoto
          }

    default:
      return state;
  }
}

// export default likeReducer;