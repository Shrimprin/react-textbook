import logo from "./logo.svg";
import "./App.css";

import Counter from "./components/Counter";
import LoginControl from "./components/LoginControl";
import ListItems from "./components/ListItems";
import SampleButton from "./components/SampleButton";
import SampleInputText from "./components/SampleInputText";
import InputText from "./components/InputText";
import InputSelectBox from "./components/InpuSelectBox";
import InputRadio from "./components/InputRadio";
import InputCheckBox from "./components/InputCheckBox";
import InputCheckBoxRe from "./components/InputCheckboxRe";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter name={"no1"}></Counter>
        <Counter name={"no2"}></Counter>

        <LoginControl />
        <ListItems />
        <SampleButton />
        <SampleInputText />
        <InputText />
        <InputSelectBox />
        <InputRadio />
        <InputCheckBox />
        <InputCheckBoxRe />
      </header>
    </div>
  );
}
