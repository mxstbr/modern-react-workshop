import React from "react";

export default class FetchRepositories extends React.Component {
  state = {
    data: null,
    loading: false,
    error: null
  };

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prev) {
    if (prev.username !== this.props.username) this.fetch();
  }

  fetch = () => {
    this.setState({
      loading: true
    });
    fetch(
      `https://api.github.com/users/${this.props.username}/repos?sort=pushed`
    )
      .then(res => res.json())
      .then(repositories => {
        this.setState({
          data: repositories,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          data: null,
          loading: false,
          error: err.message
        });
      });
  };

  render() {
    return this.props.children(this.state);
  }
}
