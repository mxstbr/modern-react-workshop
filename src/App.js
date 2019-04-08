import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import RepositoryList from "./views/RepositoryList";

export default () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/:username" component={RepositoryList} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </div>
);
