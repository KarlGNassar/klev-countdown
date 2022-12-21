import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

const COUNTDOWN_TIME = 10;

export default function Home() {
  const [counter, setCounter] = useState(COUNTDOWN_TIME);
  const [showToast, setShowToast] = useState(false);

  const resetCountDown = () => {
    setCounter(COUNTDOWN_TIME);
    setShowToast(false);
  };

  useEffect(() => {
    let countdownTimeout;

    if (counter > 0) {
      countdownTimeout = setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      setShowToast(true);
    }
  }, [counter]);

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
        <>
          {showToast ? (
            <>
              <h1>happy new year</h1>
              <button onClick={resetCountDown}>reset</button>
            </>
          ) : (
            <h1>{counter}</h1>
          )}
        </>
      </main>
    </>
  );
}
