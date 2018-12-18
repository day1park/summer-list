import React, { Component } from "react";
import AppNavBar from "./components/AppNavBar";
import BucketList from "./components/BucketList";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <BucketList />
          <h1>sup</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
