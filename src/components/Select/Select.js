import React from 'react';
import styles from './Select.module.scss';

const Select = ({ name, label, optionOne, optionTwo, optionThree, optionFour, optionFive, ...props }) => (
  <div className={styles.formItem}>
    <select
      className={styles.input}
      name={name}
      id={name}
      required
      placeholder=" "
      {...props}
    >
      <option value="">Select unit</option>
      <option value={optionOne}>{optionOne}</option>
      <option value={optionTwo}>{optionTwo}</option>
      <option value={optionThree}>{optionThree}</option>
      <option value={optionFour}>{optionFour}</option>
      <option value={optionFive}>{optionFive}</option>
    </select>
    <div className={styles.formItemBar} />
  </div>
);


export default Select;