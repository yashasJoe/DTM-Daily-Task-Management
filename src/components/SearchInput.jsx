function SearchInput({ placeholder = "Search...", value, onChange }) {
  return (
    <label className="search-box">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 5 5" />
      </svg>
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default SearchInput;
