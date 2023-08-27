// IssueCard.jsx
function IssueCard({ issue }) {
    return (
      <div className="issue-card">
        <h2>{issue.title}</h2>
        <p>{issue.body}</p>
        {/* Add other details */}
      </div>
    );
  }
export default IssueCard  