import React from 'react';
import MenuButton from './menubutton/index.js'
import styles from './style.module.css';

export default function MenuButtons({ items, type }) {
  
  return (
    <div className={styles.menuButtons} >
      {items.map((item, index) => {
        return (
          <MenuButton key={index} label={item.label} index={index} type={type} />
        );
      })}
    </div>
  );
}