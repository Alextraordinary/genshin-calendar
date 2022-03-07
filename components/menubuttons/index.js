import React from 'react';
import MenuButton from './menubutton/index.js'


export default function MenuButtons({ items }) {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <MenuButton label={item.label} />
          </li>
        );
      })}
    </div>
  );
}