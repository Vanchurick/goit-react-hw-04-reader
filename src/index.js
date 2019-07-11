import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Reader from './components/Reader/Reader';

ReactDOM.render(
  <BrowserRouter>
    <Route component={Reader} />
    <Redirect to="/articles?item=1" />
  </BrowserRouter>,
  document.getElementById('root'),
);
