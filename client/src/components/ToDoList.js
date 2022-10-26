// container that contains all the todo items

import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <ToDo key={todo.id} title={todo.title} />
      ))}
    </div>
  )
};

export default ToDoList