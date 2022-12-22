import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styles from "../styles/components/Counter.module.scss";
import { BiVolumeMute, BiVolumeFull } from "react-icons/bi";
import Celebration from "./Celebration";

// package doesn't have type defs - ignore typescript
//@ts-ignore
import FlipCountdown from "@rumess/react-flip-countdown";

const COUNTDOWN_DURATION = 10;
const ANIMATION_DURATION = 5;
const currentDate = new Date();
const countdown = new Date(
  currentDate.setSeconds(
    currentDate.getSeconds() + COUNTDOWN_DURATION + ANIMATION_DURATION
  )
);

const Counter = () => {
  const [timeEnd, setTimeEnd] = useState(false);
  const [audio, setAudio] = useState(false);

  const toggleAudio = () => {
    setAudio(!audio);
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        <div className={styles.countdownContainer}>
          {!timeEnd && (
            <>
              <div className={styles.countdownAudio}>
                {audio ? (
                  <>
                    <BiVolumeFull size={80} onClick={toggleAudio} />
                    <p>wait for it.. ;)</p>
                  </>
                ) : (
                  <BiVolumeMute size={80} onClick={toggleAudio} />
                )}
              </div>
              <div className={styles.countdownContainerText}>
                <div className={styles.coundownHeaderContainer}>
                  <motion.h1
                    className={styles.countdownHeader}
                    initial={{ y: 160, skewY: 4 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ delay: 0.2, duration: 1.1 }}
                  >
                    New Year&apos;s
                  </motion.h1>
                </div>
                <div className={styles.coundownHeaderContainer}>
                  <motion.h1
                    className={styles.countdownHeader}
                    initial={{ y: 160, skewY: 4 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ delay: 0.3, duration: 1.1 }}
                  >
                    Countdown 🥂
                  </motion.h1>
                </div>
              </div>
            </>
          )}
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FlipCountdown
              size={"large"}
              titlePosition={"bottom"}
              secondTitle={" "}
              hideYear
              hideMonth
              hideDay
              hideHour
              hideMinute
              endAt={countdown.toISOString()} // Date/Time
              onTimeUp={() => setTimeEnd(true)}
              key={"countdown"}
            >
              <motion.div
                key={"celebration"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className={styles.celebrationContainer}
              >
                <Celebration audio={audio} />
              </motion.div>
            </FlipCountdown>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Counter;
