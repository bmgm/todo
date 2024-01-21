import TodoItem from "../todoItem/TodoItem";
import s from "./TodoList.module.css";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <>
      <ul className={s.list}>
        {todos.length === 0 && "Todos are displayed here"}
        {todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
