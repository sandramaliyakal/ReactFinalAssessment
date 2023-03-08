import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from './store';
import { Checkbox, ListItem, ListItemText } from '@material-ui/core';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <ListItem key={todo.id}>
      <Checkbox
        checked={todo.completed}
        onChange={handleToggle}
        color="primary"
      />
      <ListItemText primary={todo.title} />
    </ListItem>
  );
};

export default Todo;
