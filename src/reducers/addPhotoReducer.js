const todos = (state=[], action) => {

  switch(action.type) {
    case 'ADD_PHOTO':
      return [
        ...state, action.photos
      ]
    default:
      return state;
  }
}

export default todos;