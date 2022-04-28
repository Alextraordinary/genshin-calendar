import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

export default function ImageCard({ src, name }) {
  
  return (
    <div className={`${styles.imageCard} ${styles.fivestar}`}>
      <Image src={src} width='75%' height='75%' data-tip={name} data-for={name} alt={name} />
      <ReactTooltip id={name} place="top" effect="solid">
        {name}
      </ReactTooltip>
    </div>
  );

}