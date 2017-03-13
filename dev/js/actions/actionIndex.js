export const SHOW_PERSON_DETAIL = 'SHOW_PERSON_DETAIL'

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const showPersonDetail = (id) => {
  return {
    type: SHOW_PERSON_DETAIL,
    id
  }
}