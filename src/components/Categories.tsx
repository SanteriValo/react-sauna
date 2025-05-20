const Categories = ({ value, setCategoryId }) => {
  const categories = [
    "All",
    "Wood-Fired Stoves",
    "Electric Stoves",
    "Aromatherapy",
    "Bath Brooms",
    "Accessories",
  ];

  const onClickCategory = (index: number) => {
    setCategoryId(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
