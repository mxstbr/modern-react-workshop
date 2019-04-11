import React from "react";

export const useFetchRepositories = username => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&access_token=68eb9305508fb2bda5454335b1cc05d0b37d7410`
    )
      .then(res => res.json())
      .then(repositories => {
        setData(repositories);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setData(null);
        setLoading(false);
        setError(err.message);
      });
  }, [username]);

  return { data, loading, error };
};
