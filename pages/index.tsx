import type { NextPage } from 'next'
import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import MenuButtons from '../components/menubuttons/index.js'
import { dayButtons, regionButtons, mondstadtCharacters, liyueCharacters, inazumaCharacters, sumeruCharacters } from './data.json'
import ImageCards from '../components/imagecards';
import SelectionContext from '../components/selection/Selection'

const Home: NextPage = () => {
  const { region } = useContext(SelectionContext);
  const [currCharacters, setCurrCharacters] = useState(mondstadtCharacters);

  useEffect(() => {
    switch(region) {
      case "Mondstadt":
        setCurrCharacters(mondstadtCharacters);
        break;
      case "Liyue":
        setCurrCharacters(liyueCharacters);
        break;
      case "Inazuma":
        setCurrCharacters(inazumaCharacters);
        break;
      case "Sumeru":
        setCurrCharacters(sumeruCharacters);
        break;
      default:
        setCurrCharacters(mondstadtCharacters);
    }
    
  }, [region]);
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`{utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Region</h1>
        <MenuButtons items={regionButtons} type='region' />
        <h1 className={utilStyles.headingLg}>Day</h1>
        <MenuButtons items={dayButtons} type='day' />
        <ImageCards items={currCharacters} />
      </section>
    </Layout>
  )
}

export default Home
