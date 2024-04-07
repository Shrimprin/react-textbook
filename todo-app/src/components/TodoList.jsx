import TodoItem from "./TodoItem";

export default function TodoList({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
        />
      ))}
    </ul>
  );
}
