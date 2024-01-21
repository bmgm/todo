import { useState } from "react";
import s from "./Todo.module.css";

const Todo = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
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
    <div className={s.todo}>
      <form onSubmit={handleSubmit} className={s.form} action="">
        <label htmlFor="item">New Todo</label>
        <input
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          type="text"
          id="item"
          autoFocus
          placeholder="Enter todo here"
        />
        <button className={s.submitBtn} type="submit">
          Add
        </button>
      </form>
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
    </div>
  );
};

export default Todo;
