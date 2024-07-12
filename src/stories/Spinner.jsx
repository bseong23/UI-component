import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/Spinner.module.scss";

export const Spinner = ({ id, size, color }) => {
  const spinnerStyle = {
    // 기본 색상은 primary로 설정하고, color prop이 전달된 경우 해당 색상으로 설정합니다.
    borderTopColor: color === "primary" ? "#74c1f8" : color,
    borderBottomColor: color === "primary" ? "#74c1f8" : color,
  };
  const innerStyle = {
    borderLeftColor: color === "primary" ? "#74c1f8" : color,
    borderRightColor: color === "primary" ? "#74c1f8" : color,
  };
  return (
    <div
      id={id}
      className={`${styles["spinner-container"]}  ${size ? styles[size] : ""}`}
      style={spinnerStyle}
    >
      <div className={styles["inner"]} style={innerStyle}></div>
    </div>
  );
};

Spinner.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
};

Spinner.defaultProps = {
  id: "spinner",
  size: "medium",
  color: "primary",
};
