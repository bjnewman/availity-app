import React, { Component } from 'react';
import './App.css';
import RegisterForm from './RegisterForm.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RegisterForm />
        </header>
      </div>
    );
  }
}

export default App;
