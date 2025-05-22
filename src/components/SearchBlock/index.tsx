import styles from "./SearchBlock.module.scss";

const SearchBlock = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.searchblock}>
      <h2 className={styles.title}>All items</h2>
      <div className={styles.search}>
        <h3>Search:</h3>
        <input
          onChange={(event) => setSearchValue(event.target.value)}
          className={styles.searchInput}
          placeholder="sauna products..."
        />
        <svg
          className={styles.icon}
          height="20"
          width="20"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Search Icon</title>
          <path
            d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
            style={{
              fill: "none",
              stroke: "#000",
              strokeMiterlimit: 10,
              strokeWidth: 32,
            }}
          />
          <line
            x1="338.29"
            x2="448"
            y1="338.29"
            y2="448"
            style={{
              fill: "none",
              stroke: "#000",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: 32,
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBlock;
