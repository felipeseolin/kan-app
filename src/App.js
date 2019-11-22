import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Login from './pages/Login';
import BoardList from './pages/BoardList';
import BoardCreate from './pages/BoardCreate';
import BoardEdit from './pages/BoardEdit';
import BoardDetails from './pages/BoardDetails';

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
        <Route exact path="/boards/new">
          <BoardCreate />
        </Route>
        <Route exact path="/boards/:id/edit">
          <BoardEdit />
        </Route>
        <Route exact path="/boards/:id">
          <BoardDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
