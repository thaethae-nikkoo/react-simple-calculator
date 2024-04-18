import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import Output from "./components/Output";
function App() {
  let [input, setInput] = useState(0);
  let [output, setOutput] = useState(0);
  let buttonHandler = (value) => {
    switch (value) {
      case "AC":
        setInput(0);
        setOutput(0);
        break;
      case "DEL":
        input.length === 1
          ? setInput(0)
          : setInput(input.slice(0, input.length - 1));

        break;
      case "=":
        try {
          setOutput(eval(input));
          setInput(0);
        } catch (e) {
          setOutput(e.message);
        }
        break;
      default:
        input === 0 ? setInput(value) : setInput(input + value);
        break;
    }
  };
  return (
    <>
      <div className="h-screen w-full bg-slate-200 flex flex-col items-center justify-center">
        <div className="rounded-lg md:w-1/3 mx-auto ">
          <Output output={output} />
          <Input input={input} />
          <Buttons buttonHandler={buttonHandler} />
        </div>
      </div>
    </>
  );
}

export default App;
