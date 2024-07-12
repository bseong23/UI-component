import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles/Textarea.module.scss';

export const Textarea = ({ disabled, size, fontColor, backgroundColor, type, ...props }) => {
    return (
        <textarea
            type= {type}
            className= {`${styles.Textarea} ${size ? styles[size] : ''} ${disabled ? styles['disabled'] : ''} `}
            style= {{ backgroundColor, color: fontColor }}
            disabled= {disabled}
        />
    )
}

Textarea.propTypes = {
    disabled: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'free']),
    fontColor: PropTypes.string,
}

Textarea.defaultProps = {
    backgroundColor: null,
    disabled: false,
    size: 'medium',
}