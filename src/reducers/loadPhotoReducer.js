import {LOAD_PHOTOS, LIKE_PHOTO, DISLIKE_PHOTO} from '../actions/type'
const initialState = {
  photos: []
};

// const initialState = [];

const loadPhotoReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOAD_PHOTOS:
      const photosNew = action.data.map(res => {
        return {
          id: res.id,
          likes: res.likes,
          liked_by_user: res.liked_by_user,
          urls: {
            small: res.urls.small
          },
          user: {
            name: res.user.first_name,
            link: res.user.links.html
          },
          date: res.created_at
        }
      })
      return {
          ...state, 
          photos: [...state.photos, ...photosNew]
      }

      case LIKE_PHOTO:
        console.log('like action', action.data);
          console.log('like state', state);
          return {
            ...state,
            photos: state.photos.map(
              photo => photo.id === action.data.photo.id
              ? {
                ...photo,
                likes: action.data.photo.likes,
                liked_by_user: action.data.photo.liked_by_user
              }
              : photo
            )
          }

        case DISLIKE_PHOTO:
          console.log('dislike action', action.data.photo.id);
          console.log('dislike state', state);
          return {
            ...state,
            photos: state.photos.map(
              photo => photo.id === action.data.photo.id
              ? {
                ...photo,
                likes: action.data.photo.likes,
                liked_by_user: action.data.photo.liked_by_user
              }
              : photo
            )
          }

    default:
      return state;
  }
}

export default loadPhotoReducer;