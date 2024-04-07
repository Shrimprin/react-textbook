export default function TodoItem({
  todo,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) {
  const handleToggleTodoListItemStatus = () =>
    toggleTodoListItemStatus(todo.id, todo.done);
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  return (
    <li>
      {todo.content}
      <button onClick={handleToggleTodoListItemStatus}>
        {todo.done ? "move Doing List" : "move Undone List"}
      </button>
      <button onClick={handleDeleteTodoListItem}>delete</button>
    </li>
  );
}
