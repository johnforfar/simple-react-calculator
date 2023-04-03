import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    inputRef.current.select();
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    inputRef.current.select();
  }

  function divide(e) {
    e.preventDefault();
    if (Number(inputRef.current.value) === 0) {
      resultRef.current.textContent = `Cannot divide by zero! Previous result: ${result}`;
      inputRef.current.select();
      return;
    }
    setResult((result) => result / Number(inputRef.current.value));
    inputRef.current.select();
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = '';
    inputRef.current.select();
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    inputRef.current.select();
  }
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simple React Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
