import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { routes } from './router';
import './style/index.scss';

const ele = (
  <HashRouter>
    {renderRoutes(routes)}
  </HashRouter>
)

ReactDOM.render(ele, document.getElementById("root"))