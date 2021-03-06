import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notfound from './components/Notfound';
import Connection from './components/Connection';

const Root = () => {
  return(

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/pseudo/:pseudo" exact component={Connection} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
