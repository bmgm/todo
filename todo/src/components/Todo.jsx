import { useState } from "react";
import s from "./Todo.module.css";
import NewTodoForm from "./newTodoForm/NewTodoForm";
import TodoList from "./todoList/TodoList";

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
      <div className={s.todo}>
        <NewTodoForm addTodo={addTodo} />
        <h2 className={s.header}>Todo List</h2>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </>
  );
};

export default Todo;
