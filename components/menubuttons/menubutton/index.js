import React, { ReactNode } from 'react';
import styles from './menubutton.module.css';


export default function MenuButton({ label }) {
  return (
    <button className={styles.menuButton}>
      {label}
    </button>
  );
}