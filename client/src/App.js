import React, { Component } from "react";
import Home from "./components/Home";
import Postings from './components/Postings'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        {/* <Navbar/> */}
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/Postings" component={Postings} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
