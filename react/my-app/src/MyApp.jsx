// class component

import { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Input from './Input';

class MyApp extends Component{
    constructor(props){
        super(props)
        this.state = {
          name: 'Skylar'
        }
        this.handleChangeName = this.handleChangeName.bind(this)
      }
      handleChangeName(name){
        this.setState({name})
      }
    render(){
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
                <p>{this.state.name}</p>
                <Input handleChangeName={this.handleChangeName}/>

              </header>
            </div>
          );
    }
}

export default MyApp;