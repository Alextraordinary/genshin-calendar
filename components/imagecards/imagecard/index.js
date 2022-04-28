import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

export default function ImageCard({ src, name, rarity }) {
  const backgroundStyle = rarity === 5 ? styles.fivestar : rarity === 4 ? styles.fourstar : styles.threestar;

  return (
    <div className={`${backgroundStyle} ${styles.imageCard}`}>
      <Image src={src} width='75%' height='75%' data-tip={name} data-for={name} alt={name} />
      <ReactTooltip id={name} place="top" effect="solid">
        {name}
      </ReactTooltip>
    </div>
  );

}