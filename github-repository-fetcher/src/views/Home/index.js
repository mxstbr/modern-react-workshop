import React from "react";
import { SearchHistoryContext } from "../../SearchHistory";

const Home = props => {
  const [username, setUsername] = React.useState("");
  const searchHistory = React.useContext(SearchHistoryContext);

  return (
    <div className="centered column">
      <h1>GitHub Repository Fetcher</h1>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          searchHistory.push(username);
          props.history.push(`/${username}`);
        }}
      >
        <input
          value={username}
          onChange={evt => setUsername(evt.target.value)}
          autoFocus
          placeholder="GitHub username"
        />
      </form>
      <>
        {searchHistory.items.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setUsername(item);
            }}
          >
            {item}
          </button>
        ))}
      </>
    </div>
  );
};
export default Home;
