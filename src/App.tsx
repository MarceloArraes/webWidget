import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Widget } from "./components/Widget";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className="hover:bg-slate-700 duration-100 active:shadow-none active:drop-shadow-none border-1 rounded border-black shadow-lg bg-slate-400 drop-shadow-lg p-4 m-5"
  >
    {children}
  </button>
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Button onClick={() => setCount(count + 1)}> ENVIAR</Button>
      <Button onClick={() => setCount(count - 1)}> DESENVIAR</Button>
      <div className=" text-2xl  ">{count} </div>
      <Widget />
    </div>
  );
}

export default App;
