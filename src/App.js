import React, { Component } from 'react';
import TreeCounter from './components/TreeCounter';


class App extends Component {
  render() {
    return (
      <div>
        <h1> Counter</h1>
        <TreeCounter/>
        <TreeCounter/>
        <TreeCounter/>
      </div>
    );
  }
}

export default App;