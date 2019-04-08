import React from "react";
import FetchRepositories from "../../components/FetchRepositories";
import Spinner from "../../components/Spinner";

export default ({ match }) => (
  <FetchRepositories username={match.params.username}>
    {({ error, loading, data }) => {
      if (data) {
        return (
          <div>
            <h1>@{match.params.username}'s repositories</h1>
            {data.map(repository => (
              <li key={repository.id}>
                <a href={repository.html_url}>{repository.full_name}</a>
              </li>
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
