import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Page1, Page2 } from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route exact path="/page-2" component={Page2} />
    </Switch>
  );
};

export default Routes;
