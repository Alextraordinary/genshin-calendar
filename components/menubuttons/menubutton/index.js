import React, { ReactNode, useContext, useEffect } from 'react';
import styles from './menubutton.module.css';
import SelectionContext from '../../selection/Selection';

export default function MenuButton({ label, index, type }) {
  const { region, setRegion } = useContext(SelectionContext);
  
  const onClick = () => {
    if (type == 'region') {
      setRegion(label);
    }
    
  }

  if (type == 'region') {
    return (
      <button className={label == region ? styles.menuButtonActive : styles.menuButtonInactive } index={index} onClick={onClick}>
        {label}
      </button>
    );
  }
  
  return (
    <button className={styles.menuButton} index={index}>
      {label}
    </button>
  );
}