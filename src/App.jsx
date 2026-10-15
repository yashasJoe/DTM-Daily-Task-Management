import { useEffect, useMemo, useState } from "react";
import AddTask from "./features/AddTask.jsx";
import Header from "./features/Header.jsx";
import SearchBox from "./features/SearchBox.jsx";
import StatusBar from "./features/StatusBar.jsx";
import TaskCard from "./features/TaskCard.jsx";

const STORAGE_KEY = "daily-task-manager.tasks";

const mockTasks = [
  {
    id: "task-java-oop",
    title: "Revise Java OOP Concepts",
    priority: "High Priority",
    category: "Work",
    due: "Tomorrow",
    date: "6/30/2025",
    completed: false,
  },
  {
    id: "task-react-state",
    title: "Practice React state and effects",
    priority: "Medium Priority",
    category: "Learning",
    due: "This week",
    date: "7/2/2025",
    completed: true,
  },
];

function loadTasks() {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    if (savedTasks === null) return mockTasks;

    const parsedTasks = JSON.parse(savedTasks);
    return Array.isArray(parsedTasks) ? parsedTasks : mockTasks;
  } catch {
    return mockTasks;
  }
}

function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // The app remains usable if browser storage is unavailable.
    }
  }, [tasks]);

  const completedCount = tasks.filter((task) => task.completed).length;
  const activeCount = tasks.length - completedCount;
  const progress = tasks.length
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;

  const visibleTasks = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return tasks.filter((task) => {
      const matchesSearch = task.title.toLowerCase().includes(normalizedSearch);
      const matchesFilter =
        filter === "all" ||
        (filter === "active" && !task.completed) ||
        (filter === "completed" && task.completed);

      return matchesSearch && matchesFilter;
    });
  }, [tasks, search, filter]);

  function addTask(newTask) {
    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <Header />
      <StatusBar
        total={tasks.length}
        active={activeCount}
        completed={completedCount}
        progress={progress}
      />
      <AddTask onAddTask={addTask} />
      <SearchBox
        search={search}
        onSearchChange={setSearch}
        filter={filter}
        onFilterChange={setFilter}
        counts={{ all: tasks.length, active: activeCount, completed: completedCount }}
      />
      <div className="task-list">
        {visibleTasks.length > 0 ? (
          visibleTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        ) : (
          <p className="empty-state">No tasks match your search.</p>
        )}
      </div>
    </>
  );
}

export default App;
