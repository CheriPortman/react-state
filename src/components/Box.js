import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.css';

function Box({ boxColor }) {
  return (
    <div 
      className={styles.Box} style={{ backgroundColor: boxColor }}>
      {boxColor}
    </div>
  );
}

Box.propTypes = {
  boxColor: PropTypes.string.isRequired
};

export default Box;
