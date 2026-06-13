const categories = [
  "All",
  "Pain Relief",
  "Skin Care",
  "Cold & Fever",
  "Vitamins",
  "Diabetes",
];

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "30px",
      }}
    >

      {categories.map((category) => (

        <button
          key={category}
          onClick={() =>
            setSelectedCategory(category)
          }
          style={{
            padding: "10px 16px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            backgroundColor:
              selectedCategory === category
                ? "#1976d2"
                : "#e2e8f0",
            color:
              selectedCategory === category
                ? "white"
                : "black",
          }}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryFilter;