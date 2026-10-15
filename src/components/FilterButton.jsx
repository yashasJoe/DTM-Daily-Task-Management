function FilterButton({ children, count, active = false, onClick }) {
  return (
    <button
      className={`filter-button${active ? " selected" : ""}`}
      type="button"
      aria-pressed={active}
      onClick={onClick}
    >
      {children}
      {count !== undefined && <span>{count}</span>}
    </button>
  );
}

export default FilterButton;
