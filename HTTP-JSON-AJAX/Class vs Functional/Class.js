import React, { Component } from 'react'

export default class App 
 extends Component {
  constructor(){
    super();
    this.state = {
      count:4
    };
}
// or just
  // state = {
  //   count:4
  // };

  reduct(){
    this.setState(prevState => ({ count: prevState.count - 1 }));
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }
  sumar(){
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
  const {count} = this.state
   
    return (
      <div>
        <button onClick={() => this.reduct()}>-</button>
        <span>{count}</span>
        <button onClick={() => this.sumar()}>+</button>
      </div>
    )
  }
}


