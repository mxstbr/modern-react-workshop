import React from "react";
import FetchRepositories from "../../components/FetchRepositories";
import Spinner from "../../components/Spinner";

const Repository = ({ repository }) => {
  return (
    <li>
      <a href={repository.html_url}>{repository.full_name}</a>
    </li>
  );
};

export default class RepositoryList extends React.Component {
  state = {
    amount: "5"
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <div>
          Show
          <select
            value={this.state.amount}
            onChange={evt =>
              this.setState({
                amount: evt.target.value
              })
            }
          >
            <option value="5">5 repos</option>
            <option value="10">10 repos</option>
          </select>
        </div>
        <FetchRepositories username={match.params.username}>
          {({ error, loading, data }) => {
            if (data) {
              return (
                <div>
                  <h2>@{match.params.username}'s repositories</h2>
                  {data
                    .slice(0, Number(this.state.amount))
                    .map((repository, index) => (
                      <Repository key={repository.id} repository={repository} />
                    ))}
                </div>
              );
            }
            if (loading) return <Spinner />;
            if (error) return <div>{error}</div>;

            return null;
          }}
        </FetchRepositories>
      </div>
    );
  }
}
