import { useState } from "react";

function AddTask({ onAddTask }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium Priority");
  const [category, setCategory] = useState("Work");
  const [due, setDue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const today = new Date();
    onAddTask({
      id: crypto.randomUUID(),
      title: trimmedTitle,
      priority,
      category: category.trim() || "Other",
      due: due.trim() || "No due date",
      date: today.toLocaleDateString(),
      completed: false,
    });
    setTitle("");
    setDue("");
    setIsOpen(false);
  }

  return (
    <>
      <button className="add-task" type="button" onClick={() => setIsOpen((open) => !open)}>
        <span aria-hidden="true">＋</span> {isOpen ? "Cancel" : "Add New Task"}
      </button>
      {isOpen && (
        <form className="add-task-form" onSubmit={handleSubmit}>
          <label>
            Task title
            <input autoFocus required value={title} onChange={(event) => setTitle(event.target.value)} placeholder="What do you need to do?" />
          </label>
          <label>
            Priority
            <select value={priority} onChange={(event) => setPriority(event.target.value)}>
              <option>Low Priority</option>
              <option>Medium Priority</option>
              <option>High Priority</option>
            </select>
          </label>
          <label>
            Category
            <input value={category} onChange={(event) => setCategory(event.target.value)} />
          </label>
          <label>
            Due
            <input value={due} onChange={(event) => setDue(event.target.value)} placeholder="e.g. Tomorrow" />
          </label>
          <button className="submit-task" type="submit">Add task</button>
        </form>
      )}
    </>
  );
}

export default AddTask;
