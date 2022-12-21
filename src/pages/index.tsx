import Head from "next/head";
import Counter from "../components/Counter";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Klev Countdown 🍀</title>
        <meta
          name="description"
          content="Countdown to celebrate the new year w/ Klev Agency"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Counter />
      </main>
    </>
  );
}
