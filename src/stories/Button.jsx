import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Button.module.scss';

export const Button = ({ disabled, label, size, type, backgroundColor, shape, fontColor, ...props }) => {
  return (
    <button
      type= {type}
      className={`${styles.button} ${styles[`button--${size}`]} ${styles[`button--${shape}`]} ${disabled ? styles['button--on'] : styles['button--off']}`} //className =  버튼 버튼사이즈 버튼모양 버튼상태(true,false)
      style={{ backgroundColor, color: fontColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {

  disabled: PropTypes.bool,

  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(['small', 'medium', 'large']),

  label: PropTypes.string.isRequired,

  shape: PropTypes.oneOf(['rounded', 'square']),

  fontColor: PropTypes.string,

  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  disabled: false,
  size: 'medium',
  shape: 'square',
  onClick: undefined,
};
