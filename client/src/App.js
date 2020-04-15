import React, { Component } from "react";
import Home from "./components/Home";
import Postings from './components/Postings';
import Signup from './components/Signup';
import Listings from './components/Listings'
import ListingCard from './components/ListingsCard'
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
        <Route path="/Signup" component={Signup} />
        <Route path="/Listings" component={Listings} />
        <Route path="/Listingscard" component={ListingCard} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
