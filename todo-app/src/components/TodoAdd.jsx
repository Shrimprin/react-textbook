export default function TodoAdd({ inputEl, handleAddTodoListItem }) {
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem}>+ Add Todo</button>
    </>
  );
}
