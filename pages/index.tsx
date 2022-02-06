import type { NextPage } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import MenuButton from '../components/menubuttons/menubutton'

const Home: NextPage = () => {
  return (
    <div>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`{utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Region</h1>
          <MenuButton label="you mom"></MenuButton>
        <h1 className={utilStyles.headingLg}>Day</h1>


      </section>
    </Layout>
    </div>
  )
}

export default Home
