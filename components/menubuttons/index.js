import React from 'react';
import MenuButton from './menubutton/index.js'


export default function MenuButtons({ items }) {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <MenuButton label={item.label} />
        );
      })}
    </div>
  );
}