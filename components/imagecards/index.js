import React from 'react';
import ImageCard from './imagecard/index.js'
import styles from './style.module.css';

export default function ImageCards({ items }) {
  
  return (
    <div className={styles.imageCards} >
      {items.map((item, index) => {
        return (
          <ImageCard key={index} src={item.src} name={item.name} />
        );
      })}
    </div>
  );
}