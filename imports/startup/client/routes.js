import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import App from '../../ui/layout/App';
import New from '../../ui/pages/New';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ App } />
        <Route path="/new" component={ New } />
      </Switch>
    </Router>
  );
}

Meteor.startup(() => {
  render(<Routes />, document.getElementById('app'));
});
