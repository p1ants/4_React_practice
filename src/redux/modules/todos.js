//1
export const ADD_TODO = 'todos/ADD_TODO';

//2 외부에서 어떻게 받는지.
export const addNumber = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
//3
const initialState = {
  todoList: [
    {
      id: 0,
      title: '리액트',
      content: '공부하기',
      isComplete: false,
    },
  ],
};

//4
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.todo],
      };
    default:
      return state;
  }
};

export default todos;
