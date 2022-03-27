import React, { useContext, useEffect } from 'react';
import styles from './style.module.css';
import SelectionContext from '../../selection/Selection';

export default function MenuButton({ label, index, type }) {
  const { region, setRegion } = useContext(SelectionContext);
  const { dayOfWeek, setDayOfWeek } = useContext(SelectionContext);
  
  const onClick = () => {
    if (type === 'region') {
      setRegion(label);
    }
    else if (type === 'day') {
      setDayOfWeek(label);
    }
  }

  useEffect(() => {
    setRegion('Mondstadt');
    setDayOfWeek('Today');
  }, []);

  if (type === 'region') {
    return (
      <button className={label == region ? styles.menuButtonActive : styles.menuButtonInactive } index={index} onClick={onClick}>
        {label}
      </button>
    );
  }
  else if (type === 'day') {
    return (
      <button className={label == dayOfWeek ? styles.menuButtonActive : styles.menuButtonInactive } index={index} onClick={onClick}>
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