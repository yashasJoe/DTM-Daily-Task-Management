import StatusElement from "../components/StatusElement.jsx";

function StatusBar({ total, active, completed, progress }) {
  return (
    <div className="status-bar">
      <StatusElement value={total} label="Total Tasks" />
      <StatusElement value={active} label="Active" tone="blue" />
      <StatusElement value={completed} label="Completed" tone="green" />
      <StatusElement value={`${progress}%`} label="Progress" tone="purple" icon="↗" />
    </div>
  );
}

export default StatusBar;
