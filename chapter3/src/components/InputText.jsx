import { useState } from "react";

export default function InputText() {
  const [inputTextValue, setInputTextValue] = useState("");
  const [text, setText] = useState("JavaScript");
  const handleChange = (e) => setInputTextValue(e.target.value);
  const handleClick = () => {
    setText(inputTextValue);
    setInputTextValue("");
  };
  return (
    <div className="App">
      <h1> Hello {text}!!</h1>
      <input type="text" value={inputTextValue} onChange={handleChange} />
      <input type="button" value="input" onClick={handleClick} />
    </div>
  );
}
