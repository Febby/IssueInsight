import { useState } from 'react'
import SearchComponent from './components/SearchComponent';
import IssuesList from './components/IssuesList';
import IssueCards from './components/IssueCard';
import './App.css'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [issues, setIssues] = useState([]);

  const handleSearch = async (repoName) => {
    const fetchedIssues = await fetchIssues(repoName);
    setIssues(fetchedIssues);
  };

  return (
    <>
      <h1>IssueInsight 🕵️‍♂️</h1>
      <div className='card'>
      <SearchComponent onSearch={handleSearch} />
      </div>
      <IssuesList issues={issues} />
    </>
  );
}


export default App
