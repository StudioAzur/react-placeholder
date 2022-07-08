import React from 'react'
import { Todo } from '../../../modeles/Todo.type'

// Typage des props de React en TS
type TodoProps = {
  todo: Todo
}

const TodoItem = ({todo}: TodoProps) => {
  return (
    <li>{todo.title} {todo.completed ? '✔' : '❌'}</li>
  )
}

export default TodoItem;
