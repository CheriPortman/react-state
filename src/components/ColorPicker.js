import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

function ColorPicker({ selectColorHandler }) {
  return (
    <section className={styles.ColorPicker }>
      <button className={styles.red} onClick={selectColorHandler.bind(null, 'red')}>Red</button>
      <button className={styles.yellow} onClick={selectColorHandler.bind('yellow')}>Yellow</button>
      <button className={styles.blue} onClick={selectColorHandler.bind('blue')}>Blue</button>
    </section>
  );
}

ColorPicker.propTypes = {
  selectColorHandler: PropTypes.func.isRequired
};

export default ColorPicker;
