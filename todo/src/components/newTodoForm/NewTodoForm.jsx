import { useState } from "react";
import s from "./NewTodoForm.module.css";

const NewTodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
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
    </div>
  );
};

export default NewTodoForm;
