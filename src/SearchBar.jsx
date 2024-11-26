
// SearchBar component for input
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      className="form-control"
      placeholder="exercise name"
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    ></input>
  );
}

export default SearchBar;
