import React from 'react';
import ImageCard from './imagecard/index.js'
import styles from './style.module.css';
import SelectionContext from '../selection/Selection.js';
import { useState, useContext, useEffect } from 'react';

export default function ImageCards({ items }) {
  const { dayOfWeek, setDayOfWeek } = useContext(SelectionContext);
  const [dayCode, setDayCode] = useState(0);

  useEffect(() => {
    if (dayOfWeek === "Today") {
      const today = new Date();
      let currDay = today.getDay();
      const currTime = today.getHours();
      if (currTime < 4) {
        if (currDay === 0) {
          currDay = 6;
        }
        else {
          currDay -= 1;
        }
      }
      if (currDay === 1 || currDay === 4) {
        setDayCode(1);
      }
      else if (currDay === 2 || currDay === 5) {
        setDayCode(2);
      }
      else if (currDay === 3 || currDay === 6) {
        setDayCode(3);
      }
      else {
        setDayCode(0);
      }
    }
    else if (dayOfWeek === "Monday" || dayOfWeek === "Thursday") {
      setDayCode(1);
    }
    else if (dayOfWeek === "Tuesday" || dayOfWeek === "Friday") {
      setDayCode(2);
    }
    else if (dayOfWeek === "Wednesday" || dayOfWeek === "Saturday") {
      setDayCode(3);
    }
    else {
      setDayCode(0);
    }

  }, [dayOfWeek]);

  return (
    <div className={styles.imageCards} >
      {items.map((item, index) => {
        if (dayCode === 0) {
          return (
            <ImageCard key={index} src={item.src} name={item.name} rarity={item.rarity} />
          );
        }
        else if (item.day === dayCode) {
          return (
            <ImageCard key={index} src={item.src} name={item.name} rarity={item.rarity}/>
          );
        }        
      })}
    </div>
  );
}