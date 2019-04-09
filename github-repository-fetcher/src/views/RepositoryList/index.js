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

export default ({ match }) => (
  <FetchRepositories username={match.params.username}>
    {({ error, loading, data }) => {
      if (data) {
        return (
          <div>
            <h2>@{match.params.username}'s repositories</h2>
            {data.map(repository => (
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
);
