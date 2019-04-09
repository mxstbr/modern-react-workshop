import React from "react";
import { SearchHistoryConsumer } from "../../SearchHistory";

class Home extends React.Component {
  state = {
    username: ""
  };

  render() {
    return (
      <SearchHistoryConsumer>
        {searchHistory => (
          <div className="centered column">
            <h1>GitHub Repository Fetcher</h1>
            <form
              onSubmit={evt => {
                evt.preventDefault();
                searchHistory.push(this.state.username);
                this.props.history.push(`/${this.state.username}`);
              }}
            >
              <input
                value={this.state.username}
                onChange={evt =>
                  this.setState({
                    username: evt.target.value
                  })
                }
                autoFocus
                placeholder="GitHub username"
              />
            </form>
            <>
              {searchHistory.items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    this.setState({
                      username: item
                    });
                  }}
                >
                  {item}
                </button>
              ))}
            </>
          </div>
        )}
      </SearchHistoryConsumer>
    );
  }
}

export default Home;
