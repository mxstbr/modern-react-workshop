// Store a history of searches
import React, { createContext } from "react";

export const SearchHistoryContext = createContext({
  items: []
});

export const SearchHistoryConsumer = SearchHistoryContext.Consumer;

export default class SearchHistory extends React.Component {
  state = {
    items: []
  };

  render() {
    return (
      <SearchHistoryContext.Provider
        value={{
          items: this.state.items,
          push: item => {
            this.setState({
              items: [...this.state.items, item]
            });
          }
        }}
      >
        {this.props.children}
      </SearchHistoryContext.Provider>
    );
  }
}
