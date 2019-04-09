import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchHistoryProvider from "./SearchHistory";
import Home from "./views/Home";
import RepositoryList from "./views/RepositoryList";

export default () => (
  <div>
    <SearchHistoryProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/:username" component={RepositoryList} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </SearchHistoryProvider>
  </div>
);
