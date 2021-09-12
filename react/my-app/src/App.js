// functional component
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Input from './Input';

function App() {
  
    const [ name, setName ] = useState('unknown')
    function handleChangeName(name){
       setName(name)
    }

    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>{name}</p>
          <Input handleChangeName={handleChangeName} text="try"/>

        </header>
      </div>
  );
}

export default App;
