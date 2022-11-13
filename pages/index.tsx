import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Transaction Result</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Transaction Completed! Go Back To Marriage.lk
        </h1>
        <button className={styles.button}>GO TO MARRIAGE.LK</button>
      </main>
    </div>
  )
}
