import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home";
import RepositoryList from "./views/RepositoryList";

export default () => (
  <div>
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/:username" component={RepositoryList} />
    </BrowserRouter>
  </div>
);
