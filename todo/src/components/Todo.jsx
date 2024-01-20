import { useState } from "react";
import s from "./Todo.module.css";

const Todo = () => {
  const [newItem, setNewItem] = useState("");
  return (
    <div className={s.todo}>
      <form className={s.form} action="">
        <label htmlFor="item">New Todo</label>
        <input
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
        <li className={s.listItem}>
          <input className={s.checkbox} type="checkbox" />
          <p>Todo 1</p>
          <button className={s.deleteBtn}>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
