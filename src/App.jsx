import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchComponent from './components/SearchComponent';
import PaginationComponent from './components/PaginationComponent';
import IssuesList from './components/IssuesList';
import IssueCards from './components/IssueCard';
import IssueDetails from './components/IssueDetails';
import './App.css'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [repoName, setRepoName] = useState('');
  const issuesPerPage = 10; 
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
    const [user, repo] = searchTerm.split('/');
  setUsername(user);
  setRepoName(repo);

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

function MainIssuesList(){
  // This component will contain the main list of issues, the search component, and the pagination component.
  return(
  <div>
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
    {!loading && !error && <IssuesList issues={currentIssues} username={username} repoName={repoName} />
  }
    </div>
  )
  }
// function IssueDetails({ issueId }) {
//     
    
//     // Placeholder for now
//     return (
//       <div>
//         Detailed information for issue with ID: {issueId}
//         <Link to="/">Back to issues list</Link>
//       </div>
//     );
//   }
  
  return (
    <Router>
      <h1>IssueInsight 🕵️‍♂️</h1>
      
   <Routes>
      <Route path="/" element={<MainIssuesList />} />
      <Route path="/issue/:id" element={<IssueDetails/>} />
   </Routes>
      

      

      <IssueCards/>
    </Router>
  );
}




export default App
