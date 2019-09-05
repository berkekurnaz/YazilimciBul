import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Jumbotron,
  Container,
} from 'react-bootstrap';

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Home from "./components/pages/Home";

class App extends Component {
  render() {
    return (
      <div className={App}>
        <Header />

        <Home />

        <Footer />

      </div>
    );
  }
}

export default App;
