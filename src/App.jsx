import { useState } from 'react'
import SearchComponent from './components/SearchComponent';
import IssuesList from './components/IssuesList';
import IssueCards from './components/IssueCard';
import './App.css'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
        const response = await fetch(`https://api.github.com/repos/${searchTerm}/issues`);
        const data = await response.json();

        if (response.ok) {
            setIssues(data);
        } else {
            setError(data.message);
        }
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
};

  return (
    <>
      <h1>IssueInsight 🕵️‍♂️</h1>
      <div className='card'>
      <SearchComponent onSearch={handleSearch} />
      </div>
      
      {loading && <p>Loading issues...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <IssuesList issues={issues} />}

      <IssuesList issues={issues} />
      <IssueCards/>
    </>
  );
}


export default App
