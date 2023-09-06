import { useState } from 'react'
import SearchComponent from './components/SearchComponent';
import PaginationComponent from './components/PaginationComponent';
import IssuesList from './components/IssuesList';
import IssueCards from './components/IssueCard';
import './App.css'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const issuesPerPage = 10; // or any other number you prefer
  const totalPages = Math.ceil(issues.length / issuesPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);


  const nextPage = () => {
    if (currentPage < totalPages) {
        setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
        setCurrentPage(prev => prev - 1);
    }
  };




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
      {issues.length > 0 && (
        <PaginationComponent 
          currentPage={currentPage} 
          totalPages={totalPages} 
          nextPage={nextPage} 
          prevPage={prevPage} 
        />
      )}

      {loading && <p>Loading issues...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <IssuesList issues={currentIssues} />}

      

      <IssueCards/>
    </>
  );
}


export default App
