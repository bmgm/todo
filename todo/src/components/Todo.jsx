import { useState } from "react";
import s from "./Todo.module.css";
import NewTodoForm from "./newTodoForm/NewTodoForm";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    return setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h2 className={s.header}>Todo List</h2>
      <ul className={s.list}>
        {todos.length === 0 && "Todos are displayed here"}
        {todos.map((item) => {
          return (
            <li key={item.id} className={s.listItem}>
              <input
                className={s.checkbox}
                type="checkbox"
                checked={item.completed}
                onChange={(e) => toggleTodo(item.id, e.target.checked)}
              />
              {item.title}
              <button
                onClick={() => deleteTodo(item.id)}
                className={s.deleteBtn}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
