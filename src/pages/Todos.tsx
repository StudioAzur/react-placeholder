import { useState } from "react";
import { Todo } from "../modeles/Todo.type";

const TodosPage = () => {

  const [taches, setTaches] = useState<Todo[]>([
      {id: 1, userId: 4, completed: false, title:"Faire une todolist en ReactTS"},
  ]);

  return (
    <div>
        <h2>Liste des taches</h2>

        <ul>
            <li></li>
        </ul>

    </div>
  )
}

export default TodosPage;
