import React, { Component } from 'react';
import Users from './Users';
import Footer from './Footer';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newVal: 3
    };
  }

  render() {
    return (
      <div className="App">
        <Users />
        <Footer someParam={4} />
      </div>
    );
  }
}

export default App;
