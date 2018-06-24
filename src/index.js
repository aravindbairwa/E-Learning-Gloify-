import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from './reducers';
import Home from './containers/home';
import Login from './containers/login';
import SignUp from './containers/sign-up';
import Viewer from './components/watch_video_page';
import History from "./components/history";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/history" component={History} />
        <Route path="/watch_video_page" component={Viewer} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
