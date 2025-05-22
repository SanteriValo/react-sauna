import styles from "./SearchBlock.module.scss";

const SearchBlock = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.searchblock}>
      <h2 className={styles.title}>All items</h2>
      <div className={styles.search}>
        <h3>Search:</h3>
        <input
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
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
        <svg
          className={styles.iconClear}
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 32 32"
          width={24}
          height={24}
        >
          <path
            fill="#121313"
            d="m17.459 16.014 8.239-8.194a.992.992 0 0 0 0-1.414 1.016 1.016 0 0 0-1.428 0l-8.232 8.187L7.73 6.284a1.009 1.009 0 0 0-1.428 0 1.015 1.015 0 0 0 0 1.432l8.302 8.303-8.332 8.286a.994.994 0 0 0 0 1.414 1.016 1.016 0 0 0 1.428 0l8.325-8.279 8.275 8.276a1.009 1.009 0 0 0 1.428 0 1.015 1.015 0 0 0 0-1.432l-8.269-8.27z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBlock;
