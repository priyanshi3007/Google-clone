import React from 'react';
import {BrowserRouter, Router, Switch, Route} from "react-router-dom";
import Nav from './GoogleClone/homeComponents/Nav';
import SearchRes from './GoogleClone/searchPage/SeachRes';
import './GoogleClone/styles/design.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Nav} />
          <Route path="/search" component={SearchRes} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
