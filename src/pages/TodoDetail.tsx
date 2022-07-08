import React, { useState } from "react";
import TodoItem from "../components/Todos/Todo/TodoItem";
import { Todo } from "../modeles/Todo.type";

const TodoDetail = () => {
  const [todo, setTodo] = useState<Todo | undefined>();

  return (
    <div>
      {todo ? (
        <ul>
          <li>id de la tache: {todo?.id}</li>
          <li>Utilisateur id: {todo?.userId}</li>
          <li>intitulé de la tache: {todo?.title}</li>
          <li>La tache est-elle faite?: {todo?.completed}</li>
          <TodoItem todo={todo} />
        </ul>
      ) : (
        <p>Récupération de la tache...</p>
      )}
    </div>
  );
};

export default TodoDetail;
