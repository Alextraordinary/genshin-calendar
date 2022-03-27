import React from 'react';
import styles from './style.module.css';
import Image from 'next/image'

export default function ImageCard({ src, name }) {
  return (
    <div className={styles.imageCard}>
      <Image src={src} width={30} height={50} />
    </div>
  );

}