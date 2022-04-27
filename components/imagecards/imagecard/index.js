import React from 'react';
import { useState } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

export default function ImageCard({ src, name }) {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  }
  
  return (
    <div className={styles.imageCard}>
      <Image src={src} width='75%' height='75%' data-tip={name} data-for={name}/>
      <ReactTooltip id={name} place="top" effect="solid">
        {name}
      </ReactTooltip>
    </div>
  );

}