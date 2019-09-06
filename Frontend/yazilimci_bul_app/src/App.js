import React, { Component } from 'react';

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Home from "./components/pages/Home";

class App extends Component {
  render() {
    return (
      <div className={App}>

        <div class="site-wrap">
          <Header />

          <Home />

          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
