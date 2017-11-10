import React, { Component } from 'react';
import './App.css';
import router from './router.js'
import Header from './components/header/Header'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          {router}
        </div>
      </div>
    );
  }
}

export default App;
