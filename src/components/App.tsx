import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './Login/Login';

const App: React.FC = (props) => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  )
}

export default App;