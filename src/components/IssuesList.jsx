// IssuesList.jsx
function IssuesList({ issues }) {
    return (
      <div className="issues-list">
        {issues.map(issue => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    );
  }

export default IssuesList
  