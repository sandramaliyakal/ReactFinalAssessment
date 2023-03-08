import { createStore } from 'redux';

// Define initial state
const initialState = {
  todos: [],
};

// Define actions
export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});

// Define reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(todoReducer);

export default store;
