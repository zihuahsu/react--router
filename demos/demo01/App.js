import React from 'react'
import { render } from 'react-dom'

const About = React.createClass({
  render() {
    return <div>About</div>
  }
})
const Inbox = React.createClass({
  render() {
    return <div>Inbox</div>
  }
})
const Home =React.createClass({
  render() {
    return <div>Home</div>
  }
})

export default React.createClass({
  getInitialState() {
    return {
      route: window.location.hash.substr(1)
    }
  },

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  },

  render() {
    let Child
    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/inbox': Child = Inbox; break;
      default:      Child = Home;
    }

    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/inbox">Inbox</a></li>
        </ul>
        <Child/>
      </div>
    )
  }
})