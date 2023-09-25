import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function IssueDetails() {
  const { id: issueId } = useParams();
  console.log("Issue ID:", issueId);

  const location = useLocation();
  console.log("Location State:", location.state);
  // const { username, repoName } = location.state;
  // const [issue, setIssue] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  
  // useEffect(() => {
  //   const fetchIssueDetails = async () => {
  //     try {
  //       const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/issues/${issueId}`);
  //       const data = await response.json();
  //       setIssue(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };


  //   fetchIssueDetails();
  // }, [issueId, username, repoName]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  
  return (
    
    <div>
      Issue ID: {issueId}
      Location state: {location.state};
      
    </div>

  );
}

export default IssueDetails;
