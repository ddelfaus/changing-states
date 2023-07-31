import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const languages = {
  js: "JavaScript",
  java: "Java",
  go: "Golang",
}

function App() {
  const [selection, setSelection] = useState('')
  const onSelect = event => {
  const { value } = event.target
    setSelection(value)
  }
  const onReset = () => {
    setSelection('')
  }
  return (
    <div className="App">
        <section>
          <h2>Opinionated Form</h2>
          <p>Choose the best programming language:</p>
          <select value={selection} onChange={onSelect}>
            <option value="">Make selection</option>
            <option value="js">JavaScript</option>
            <option value="java">Java</option>
            <option value="go">Golang</option>
          </select>
          <h4 id="info">{
            !selection
              ? 'No selection made'
              : `You chose ${languages[selection]}. ${selection === 'js' ? 'WELL DONE! ❤️' :   ''}`
          }</h4>
          <button onClick={onReset}>Reset</button>
    </section>
    
    </div>
  );
}

export default App;
