import React from 'react';
import './Sytle.css';

class TreeCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <div id='Counter'>
        <p>Count: {count}</p>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}

export default TreeCounter;
