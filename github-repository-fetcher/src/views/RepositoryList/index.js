import React from "react";
import { unstable_trace as trace } from "scheduler/tracing";
import { useFetchRepositories } from "../../components/FetchRepositories";
import Spinner from "../../components/Spinner";

const Repository = React.memo(({ repository }) => {
  return (
    <li>
      <a href={repository.html_url}>{repository.full_name}</a>
    </li>
  );
});

Repository.displayName = "Repository";

export default ({ match }) => {
  const [amount, setAmount] = React.useState("5");
  const { data, loading, error } = useFetchRepositories(match.params.username);

  React.useEffect(() => {
    if (data) {
      document.title = `${data.length} repositories`;
    }
  }, [data]);

  return (
    <div>
      <div>
        Show
        <select
          value={amount}
          onChange={evt => {
            trace("Select Changed", performance.now(), () => {
              setAmount(evt.target.value);
            });
          }}
        >
          <option value="5">5 repos</option>
          <option value="10">10 repos</option>
        </select>
      </div>
      {(() => {
        if (data) {
          return (
            <div>
              <h2>@{match.params.username}'s repositories</h2>
              {data.slice(0, Number(amount)).map((repository, index) => (
                <Repository key={repository.id} repository={repository} />
              ))}
            </div>
          );
        }
        if (loading) return <Spinner />;
        if (error) return <div>{error}</div>;

        return null;
      })()}
    </div>
  );
};
