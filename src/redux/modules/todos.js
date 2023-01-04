//1
export const ADD_TODO = 'todos/ADD_TODO';
export const DELETE_TODO = 'todos/DELETE_TODO';
export const DONE_TODO = 'todos/DONE_TODO';

//2 외부에서 어떻게 받는지.
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

export const doneTodo = (payload) => {
  return {
    type: DONE_TODO,
    payload: payload,
  };
};

//3
const initialState = {
  todoList: [
    {
      id: 1,
      title: '리액트',
      content: '공부하기',
      isComplete: false,
    },
    {
      id: 2,
      title: '리액트',
      content: '공부다함',
      isComplete: true,
    },
  ],
};

//4
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todoList) => todoList.id !== action.payload
        ),
      };
    case DONE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todoList) =>
          todoList.id === action.payload
            ? { ...todoList, isComplete: !todoList.isComplete }
            : todoList
        ),
      };

    default:
      return state;
  }
};

export default todos;
