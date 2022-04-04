import React, { Component } from 'react'

export default class SecondRef extends Component {

    constructor() {
        super();
        this.state = {count: ""};
    }

    updateByRef() {
        this.setState({count: this.countRef.value});
    }

  render() {
    return (
      <div>
          Counts <input type="text" ref={(call_back) => {this.countRef = call_back}} onChange = {this.updateByRef.bind(this)}/>
          <br />
          <em>{this.state.count}</em>
      </div>
    )
  }
}
