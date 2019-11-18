import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { GlobalStyle } from './global.styles';

import Homepage from './pages/homepage/homepage';
import ShowPage from './pages/show/show';
import SearchPage from './pages/search/search';

const history = createBrowserHistory();

const App = () => {
  return (
    <Fragment>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/show/:id' component={ShowPage} />
          <Route exact path='/search' component={SearchPage} />
          <Route exact path='/search/:keyword' component={SearchPage} />
        </Switch> 
      </Router>
      <GlobalStyle />
    </Fragment>
  ); 
}

export default App;
