import React from "react";
import ReactDom from "react-dom";
import { Router, Route, Link } from "react-router";

const About = React.createClass({
  render() {
    return <div>About</div>;
  },
});
const Inbox = React.createClass({
  render() {
    return <div>Inbox</div>;
  },
});
const Home = React.createClass({
  render() {
    return <div>Home</div>;
  },
});

const App = React.createClass({
  getInitialState() {
    return {
      route: window.location.hash.substr(1),
    };
  },

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
  },

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>App</h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/inbox">Inbox</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  },
});

ReactDom.render(
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>,
  document.getElementById("root")
);
