import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { useCursorStore } from "../store/cursor";
import styles from "../styles/components/Celebration.module.scss";

interface Props {
  audio: boolean;
}

const Celebration: React.FC<Props> = ({ audio }) => {
  const { setCursorType } = useCursorStore();

  useEffect(() => {
    setCursorType(true);
    if (audio) {
      let newYearAudio = new Audio("/new-year.mp3");
      newYearAudio.volume = 0.5;
      newYearAudio.loop = true;
      newYearAudio.play();

      let popAudio = new Audio("/pop.mp3");
      popAudio.volume = 0.5;
      popAudio.play();
    }
  }, []);

  return (
    <div>
      <Confetti colors={["#C0C0C0", "#FFD700", "#71706E", "#AA6C39"]} />
      <div className={styles.celebrationTextContainer}>
        <h1 className={styles.celebrationText}>Happy New</h1>
        <h1
          className={`${styles.celebrationText} ${styles.celebrationTextBig}`}
        >
          Year
        </h1>
        <h1 className={styles.celebrationText}>2023</h1>
      </div>
    </div>
  );
};

export default Celebration;
