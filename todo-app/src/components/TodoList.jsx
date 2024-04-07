import TodoItem from "./TodoItem";

export default function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
