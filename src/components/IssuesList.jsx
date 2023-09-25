import React from 'react';
import IssueCard from './IssueCard';

function IssuesList({ issues, username, repoName }) {
    return (
        <div>
            {issues.map(issue => (
                <IssueCard key={issue.id} issue={issue} username={username} repoName={repoName} />
            ))}
        </div>
    );
}


export default IssuesList;
