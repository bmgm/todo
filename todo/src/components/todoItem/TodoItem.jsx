import s from "./TodoItem.module.css";

const TodoItem = ({ item, toggleTodo, deleteTodo }) => {
  return (
    <li key={item.id} className={s.listItem}>
      <input
        className={s.checkbox}
        type="checkbox"
        checked={item.completed}
        onChange={(e) => toggleTodo(item.id, e.target.checked)}
      />
      {item.title}
      <button onClick={() => deleteTodo(item.id)} className={s.deleteBtn}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
