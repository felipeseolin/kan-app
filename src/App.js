import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// Components
import Login from './pages/Login';
import BoardList from './pages/BoardList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/boards">
          <BoardList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
