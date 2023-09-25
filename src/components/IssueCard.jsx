import React from 'react';
import { Link } from 'react-router-dom';

function IssueCard({ issue, username, repoName  }) {
    if (!issue) return null; // This will prevent rendering if issue is undefined

    return (
      <div className="issue-card">
      <Link 
              to={{
                pathname: `/issue/${issue.id}`,
                state: {
                  username: username,
                  repoName: repoName
                }
              }}
            >
        {issue.title}
      </Link>
      <p>Opened by {issue.user.login} on {new Date(issue.created_at).toLocaleDateString()}</p>
      {issue.labels.length > 0 && (
          <div className="labels">
              {issue.labels.map(label => (
                  <span key={label.id} style={{ backgroundColor: `#${label.color}` }}>
                      {label.name}
                  </span>
              ))}
          </div>
      )}
      <a href={issue.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>
    );
}

export default IssueCard;
