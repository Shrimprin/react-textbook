import TodoTitle from "./TodoTitle";
import TodoList from "./TodoList";
import { useTodo } from "../hooks/useTodo";

export default function App() {
  const { todoList } = useTodo();

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <>
      <TodoTitle title="Todo App" as="h1" />
      <textarea />
      <button>+ Add Todo</button>

      <TodoTitle title="Doing List" as="h2" />
      <TodoList todoList={inCompletedList} />

      <TodoTitle title="Done List" as="h2" />
      <TodoList todoList={completedList} />
    </>
  );
}
