function StatusElement({ value, label, tone = "dark", icon }) {
  return (
    <div className={`status-element status-${tone}`}>
      {icon && <span className="status-icon" aria-hidden="true">{icon}</span>}
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default StatusElement;
