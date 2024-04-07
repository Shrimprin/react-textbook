export default function TodoItem({ todo }) {
  return (
    <li>
      {todo.content}
      <button>{todo.done ? "move Doing List" : "move Undone List"}</button>
      <button>delete</button>
    </li>
  );
}
