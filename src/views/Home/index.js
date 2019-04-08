import React from "react";

class Home extends React.Component {
  state = {
    username: ""
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.props.history.push(`/${this.state.username}`);
  };

  render() {
    return (
      <div className="centered column">
        <h1>GitHub Repository Fetcher</h1>
        <form onSubmit={this.onSubmit}>
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
      </div>
    );
  }
}

export default Home;
