import Head from "next/head";
import { useEffect } from "react";
import Counter from "../components/Counter";
import styles from "../styles/Home.module.scss";
import css from "../utils/consoleCss";

export default function Home() {
  // uneccesary easter egg 👇
  useEffect(() => {
    console.log("%cHappy New Year!! Thank You Klev 🍀", css);
  }, []);

  return (
    <>
      <Head>
        <title>Klev Countdown 🍀</title>
        <meta
          name="description"
          content="Countdown to celebrate the new year w/ Klev Agency"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Counter />
      </main>
    </>
  );
}
