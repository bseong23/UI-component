import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/Progress.module.scss";

export const Progress = ({
  id,
  size,
  color,
  percent,
  rounded,
  showPercent,
}) => {
  const progressColor = {
    backgroundColor: color === "primary" ? "#74c1f8" : color,
  };

  return (
    <div
      id={id}
      className={`${styles["progress-container"]} ${size ? styles[size] : ""} ${rounded ? styles["round"] : ""}`}
    >
      <div
        className={styles["inner"]}
        style={{ width: `${percent}%`, ...progressColor }}
      >
        <div
          className={`${styles["percent"]} ${showPercent ? "" : styles["blind"]}`}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

Progress.propTypes = {
  id: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  percent: PropTypes.number,
  showPercent: PropTypes.bool,
};

Progress.defaultProps = {
  id: "progress",
  rounded: true,
  size: "medium",
  color: "primary",
  percent: 60,
  showPercent: false,
};
