import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import AppRoute from './AppRoute'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
            <AppRoute />
          </div>
      </Provider>
    )
  }
}

export default App
