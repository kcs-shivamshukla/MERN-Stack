import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Signup extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
      <form action="/users/signin" method='post'>
      <h1>Sign up</h1>
      <input type="text" name="fname" id="fname" placeholder='john' />
      <input type="text" name="lname" id="lname" placeholder='doe' />
      <input type="text" name="email" id="email" placeholder='john@doe.com' />
      <input type="password" name="password" id="password" placeholder='password' />
      <button type="submit">Sign up</button>
      </form>
    </div>
    )
  }
}