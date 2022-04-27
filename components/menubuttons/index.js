import React from 'react';
import MenuButton from './menubutton/index.js'
import styles from './style.module.css';

export default function MenuButtons({ items, type }) {
  
  return (
    <div className={styles.menuButtons} key={index}>
      {items.map((item, index) => {
        return (
          <MenuButton label={item.label} index={index} type={type} />
        );
      })}
    </div>
  );
}