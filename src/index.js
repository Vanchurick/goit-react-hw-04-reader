import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Reader from './components/Reader/Reader';

ReactDOM.render(
  <HashRouter basename="/">
    <Route component={Reader} />
    <Redirect to="/articles?item=1" />
  </HashRouter>,
  document.getElementById('root'),
);
