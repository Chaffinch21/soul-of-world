import {LOAD_PHOTOS} from '../actions/type'
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
      console.log(photosNew);
      return {
        ...state, 
          ...state, photos: photosNew
      }
    default:
      return state;
  }
}

export default loadPhotoReducer;