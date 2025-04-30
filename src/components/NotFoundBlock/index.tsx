import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>😔</span>
      <h2>Not found</h2>
      <p className={styles.description}>
        Unfortunately, this page is not available in our store.
      </p>
    </div>
  );
};

export default NotFoundBlock;
