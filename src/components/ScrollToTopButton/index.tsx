import styles from "./ScrollToTopButton.module.css";
import { useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <div className="wrapper">
        <button
          className={styles.scrollToTopButton}
          /*onClick={scrollToTop}*/
        >
          TOP
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
