import React from 'react';
import styles from './Input.module.scss';

const Input = ({ name, label, type, isRequired, ...props }) => (
  <div className={styles.formItem}>
    <input
      className={type === 'number' ? styles.input : styles.input}
      type={type}
      name={name}
      id={name}
      required={isRequired}
      placeholder=" "
      {...props}
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.formItemBar} />
  </div>
);


export default Input;