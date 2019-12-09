import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './auth';
// Components
import Login from './pages/Login';
import Register from './pages/Register';
import BoardList from './pages/BoardList';
import BoardCreate from './pages/BoardCreate';
import BoardEdit from './pages/BoardEdit';
import BoardDetails from './pages/BoardDetails';
import ListCreate from './pages/ListCreate';
import ListEdit from './pages/ListEdit';
import CardCreate from './pages/CardCreate';
import CardEdit from './pages/CardEdit';
import Logout from './pages/Logout';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/boards" component={BoardList} />
      <PrivateRoute exact path="/boards/new" component={BoardCreate} />
      <PrivateRoute exact path="/boards/:id/edit" component={BoardEdit} />
      <PrivateRoute exact path="/boards/:id" component={BoardDetails} />
      <PrivateRoute
        exact
        path="/boards/:idBoard/lists/new"
        component={ListCreate}
      />
      <PrivateRoute
        exact
        path="/boards/:idBoard/lists/:idList/edit"
        component={ListEdit}
      />
      <PrivateRoute
        exact
        path="/boards/:idBoard/lists/:idList/cards/new"
        component={CardCreate}
      />
      <PrivateRoute
        exact
        path="/boards/:idBoard/lists/:idList/cards/:idCard/edit"
        component={CardEdit}
      />
      <PrivateRoute exact path="/logout" component={Logout} />
    </Switch>
  </Router>
);

export default Routes;
