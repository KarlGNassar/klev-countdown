import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Fragment, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FakeLoader from "../components/FakeLoader";
import { useRouter } from "next/router";
import CustomCursor from "../components/CustomCursor";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  return (
    <>
      <Head>
        <title>Klev Countdown 🍀</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AnimatePresence mode="wait">
        {loading ? (
          <FakeLoader setLoading={setLoading} />
        ) : (
          <Fragment key={router.route}>
            <CustomCursor />
            <Component {...pageProps} />
          </Fragment>
        )}
      </AnimatePresence>
    </>
  );
}
