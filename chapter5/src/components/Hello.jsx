export default function Hello({ name, handleChangeName, initialName }) {
  return (
    <div className="App">
      <p>
        Hello, <b>{name}</b>
        <br />
        initialName is ... : <b>{initialName}</b>
      </p>
      <input type="text" onChange={handleChangeName} />
    </div>
  );
}
