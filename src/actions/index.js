// let nextTodoId = 4;
export const addComment =(id, author, comment, dateTime)  => ({ 
  type: 'ADD_COMMENT',
  id,
  author,
  comment,
  dateTime
});

export const deleteComment = (id) => {
  return {
    type: 'DELETE_COMMENT',
    id
  }
}