import { useState } from 'react'

// SearchComponent.jsx
function SearchComponent({ onSearch }) {
  const [username, setUsername] = useState('');
  const [repoName, setRepoName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(`${username}/${repoName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username-field">
        Username:
      </label>
      <input
        id="username-field"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />

      <label htmlFor="repo-field">
        Repo name:
      </label>
      <input
        id="repo-field"
        value={repoName}
        onChange={event => setRepoName(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchComponent