function TaskCard({ task, onToggle, onDelete }) {
  const priorityClass = task.priority.toLowerCase().split(" ")[0];

  return (
    <article className={`task-card${task.completed ? " completed-task" : ""}`}>
      <input
        className="task-check"
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark ${task.title} ${task.completed ? "active" : "complete"}`}
      />
      <div className="task-content">
        <h2>{task.title}</h2>
        <div className="task-meta">
          <span className={`tag priority ${priorityClass}`}>{task.priority}</span>
          <span className="tag category">{task.category}</span>
          <span className="tag due">{task.due}</span>
          <span className="tag date">{task.date}</span>
        </div>
      </div>
      <button className="delete-task" type="button" aria-label={`Delete ${task.title}`} onClick={() => onDelete(task.id)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16M9 7V4h6v3m3 0-.8 13H6.8L6 7m4 4v6m4-6v6" />
        </svg>
      </button>
    </article>
  );
}

export default TaskCard;
