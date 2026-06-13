function SearchBar({ searchTerm, setSearchTerm }) {

  return (
    <input
      type="text"
      placeholder="Search medicines..."
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(e.target.value)
      }
      style={{
        width: "100%",
        padding: "15px",
        fontSize: "16px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        marginBottom: "25px",
      }}
    />
  );
}

export default SearchBar;