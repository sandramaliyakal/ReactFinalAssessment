import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store';
import { List ,useSelector} from '@material-ui/core';
import Todo from './Todo';

const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((todo) => {
          dispatch(addTodo(todo));
        });
      });
  }, [dispatch]);

  const todos = useSelector((state) => state.todos);

  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;