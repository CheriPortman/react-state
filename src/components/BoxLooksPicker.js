import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoxLooksPicker.css';

function BoxLooksPicker({ selectBoxHandler }) {
  return (
    <section className={styles.BoxLooksPicker}>
      <button onClick={selectBoxHandler.bind(null, 'purple')}>Purple</button>
      <button onClick={selectBoxHandler.bind(null, 'orange')}>Orange</button>
      <button onClick={selectBoxHandler.bind(null, 'green')}>Green</button>
    </section>
  );
}

BoxLooksPicker.propTypes = {
  selectBoxHandler: PropTypes.func.isRequired
};

export default BoxLooksPicker;
