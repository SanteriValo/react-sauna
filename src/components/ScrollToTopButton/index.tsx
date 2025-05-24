import styles from "./ScrollToTopButton.module.scss";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setVisible(scrolled > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <div className="wrapper">
        <button
          className={`${styles.scrollToTopButton} button`}
          onClick={scrollToTop}
        >
          <svg
            className={styles.icon}
            viewBox="0 0 96 96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path
              fill="currentColor"
              d="M82.6074,62.1072,52.6057,26.1052a6.2028,6.2028,0,0,0-9.2114,0L13.3926,62.1072a5.999,5.999,0,1,0,9.2114,7.6879L48,39.3246,73.396,69.7951a5.999,5.999,0,1,0,9.2114-7.6879Z"
            />
          </svg>
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
