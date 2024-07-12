import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Input.module.scss';

export const Input = ({ disabled, size, backgroundColor, shape, fontColor, type}) => {
  return (
    <div>
    <input
      className={`${type ? styles[type] : 'text'} ${size ? styles[size] : ''} ${shape ? styles[shape] : ''} ${disabled ? styles['disabled'] : ''}`} //className =  버튼 버튼사이즈 버튼모양 버튼상태(true,false)
      style={{ backgroundColor, color: fontColor}}
      disabled={disabled}
      />
    </div>
  );
};

Input.propTypes = {
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shape: PropTypes.oneOf(['rounded', 'square']),
  fontColor: PropTypes.string,
  onchange: PropTypes.func
};

Input.defaultProps = {
  backgroundColor: null,
  disabled: false,
  size: 'medium',
  shape: 'square',
};
