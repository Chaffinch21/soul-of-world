const todos = (state=[], action) => {

  switch(action.type) {
    case 'LOAD_PHOTOS':
      return [
        ...state.photos, action.photos
      ]
    default:
      return state;
  }
}

export default todos;