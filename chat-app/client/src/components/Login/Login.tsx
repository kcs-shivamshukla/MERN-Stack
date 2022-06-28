import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Login extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <form action="/users/signin" method='post'>
        <h1>Sign in</h1>
        <input type="text" name="email" id="email" placeholder='john@doe.com' />
        <input type="password" name="password" id="password" placeholder='Enter password' />
        <button type="submit">Sign in</button>
        </form>
      </div>
    )
  }
}