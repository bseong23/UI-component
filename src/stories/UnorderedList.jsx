import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/UnorderedList.module.scss";

export const UnorderedList = ({ items, listStyle }) => {
    return (
        <ul className={`${styles['unordered-list']} ${listStyle !== 'none' ? styles[listStyle] : ''}`}>
            {items.map(item => (
                <li className={styles['unordered-item']} key={item.id}>
                    {item.label}
                </li>
            ))}
        </ul>
    );
};

UnorderedList.propTypes = {
    listStyle: PropTypes.oneOf(['basic', 'line', 'none']),
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
};

UnorderedList.defaultProps = {
    listStyle: 'basic',
};
