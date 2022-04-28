import type { NextPage } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import MenuButtons from '../components/menubuttons/index.js'
import { dayButtons, regionButtons, mondstadtCharacters } from './data.json'
import ImageCards from '../components/imagecards';

const Home: NextPage = () => {
  return (
    <div>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`{utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Region</h1>
        <MenuButtons items={regionButtons} type='region' />
        <h1 className={utilStyles.headingLg}>Day</h1>
        <MenuButtons items={dayButtons} type='day' />
        <ImageCards items={mondstadtCharacters} />
      </section>
    </Layout>
    </div>
  )
}

export default Home
