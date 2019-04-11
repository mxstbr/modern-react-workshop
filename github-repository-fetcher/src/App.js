import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner";
import SearchHistoryProvider from "./SearchHistory";

const Home = React.lazy(() =>
  import("./views/Home" /* webpackChunkName: "Home" */)
);
const RepositoryList = React.lazy(() =>
  import("./views/RepositoryList" /* webpackChunkName: "RepositoryList" */)
);

export default () => (
  <div>
    <SearchHistoryProvider>
      <BrowserRouter>
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/:username" component={RepositoryList} />
            <Route path="/" component={Home} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </SearchHistoryProvider>
  </div>
);
