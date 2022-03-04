import React from 'react'
import ReactDom from 'react-dom'

const About = React.createClass({
  render() {
    return <div>About1</div>
  }
})
const Inbox = React.createClass({
  render() {
    return <div>Inbox1</div>
  }
})
const Home =React.createClass({
  render() {
    return <div>Home1</div>
  }
})

const App = React.createClass({
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
    // 通过获取#后面的字符串来实现的
    console.log(window)
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

ReactDom.render(<App/>, document.getElementById('root'))