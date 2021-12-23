import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Layout: NextPage = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
            <Head>
        <title>{t('askMeQuestion')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={styles.main}>

        {/* <h1 className={styles.title}>
          {t('askMeQuestion')}
        </h1> */}

        <div className={styles.topnav}>
          <h2 className={styles.title}>{t('askMeQuestion')}</h2>
        </div> 

        {children}

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/leonardo-estrela-637a03180/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('createdBy')} Leonardo Estrela
        </a>
      </footer>
      </div>
  )
}

export default Layout
