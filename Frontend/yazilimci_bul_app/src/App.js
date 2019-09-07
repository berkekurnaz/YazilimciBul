import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import Developers from "./components/pages/Developers";
import Login from "./components/pages/Login";

class App extends Component {
  render() {
    return (
      <div className={App}>

        <div class="site-wrap">
          <Header />

          <Route exact path='/' component={Home}></Route>
          <Route exact path='/explore' component={Explore}></Route>
          <Route exact path='/developers' component={Developers}></Route>
          <Route exact path='/login' component={Login}></Route>

          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
