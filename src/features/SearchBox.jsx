import FilterButton from "../components/FilterButton.jsx";
import SearchInput from "../components/SearchInput.jsx";

function SearchBox({ search, onSearchChange, filter, onFilterChange, counts }) {
  return (
    <section className="task-tools" aria-label="Find and filter tasks">
      <SearchInput
        placeholder="Search tasks..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
      <span className="filter-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z" />
        </svg>
      </span>
      <div className="filter-buttons">
        <FilterButton active={filter === "all"} count={counts.all} onClick={() => onFilterChange("all")}>
          All Tasks
        </FilterButton>
        <FilterButton active={filter === "active"} count={counts.active} onClick={() => onFilterChange("active")}>
          Active
        </FilterButton>
        <FilterButton active={filter === "completed"} count={counts.completed} onClick={() => onFilterChange("completed")}>
          Completed
        </FilterButton>
      </div>
    </section>
  );
}

export default SearchBox;
