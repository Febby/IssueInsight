import { useState } from 'react'

// SearchComponent.jsx
function SearchComponent({ onSearch }) {
    const [localSearchTerm, setLocalSearchTerm] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(localSearchTerm);
    };
  
    return (
      <form onSubmit={handleSubmit}>
                <label htmlFor="search-field">
                Repo name:
                </label>
                <input
                id="search-field"
                value={localSearchTerm}
                onChange={event => {
                    setLocalSearchTerm(event.target.value);
                }}
                />
      </form>
    );
  }
export default SearchComponent