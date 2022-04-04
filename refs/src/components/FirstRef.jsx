import React, { Component } from 'react'

export default class FirstRef extends Component {

    constructor() {
        super();
        this.state = {count: 0};
    }

    updateByRef(e) {
        this.setState({count: this.refs.countRef.value});
    }
  render() {
    return (
      <div>
          Counts <input type="text" ref="countRef" onChange={this.updateByRef.bind(this)}/>
          <br />
          <p>{this.state.count}</p>
      </div>
    )
  }
}

