import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux';

import About from './screens/About';
import Users from './screens/Users';
import Todos from './screens/Todos';
import Home from './screens/Home';

import NavBar from './components/NavBar';
import store from './store';

import Actions from './actions';

store.dispatch(Actions.Todos.addNewTodo('aprender redux'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
