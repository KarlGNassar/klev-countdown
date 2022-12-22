import { motion, Variants } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import styles from "../styles/components/FakeLoader.module.scss";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const klevGreen = "#0b7143";
const cloverPathVariant: Variants = {
  visible: {
    pathLength: 1,
  },
  hidden: {
    pathLength: 0,
  },
};

const FakeLoader: React.FC<Props> = ({ setLoading }) => {
  return (
    <motion.div
      initial="initialState"
      animate="animateState"
      exit="exitState"
      variants={{
        initialState: {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          bottom: 0,
          zIndex: 2,
        },
        animateState: {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

          transition: {
            duration: 1.6,
            ease: [0.87, 0, 0.13, 1],
          },
        },
        exitState: {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",

          transition: {
            delay: 2.4,
            duration: 1,
            ease: [0.87, 0, 0.13, 1],
          },
        },
      }}
      onAnimationStart={() => {
        document.body.style.overflowY = "hidden";
      }}
      onAnimationComplete={() => {
        setLoading(false);
        document.body.style.overflowY = "scroll";
      }}
      className={styles.pageTransition}
    >
      <motion.svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 32.000000 32.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.g
          transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
          stroke={klevGreen}
          strokeWidth={10}
          initial={{ fill: "#000" }}
          animate={{ fill: klevGreen }}
          transition={{
            default: {
              duration: 3,
              ease: "easeInOut",
            },
            fill: {
              delay: 2.9,
              duration: 1,
              ease: [1, 0, 0.8, 1],
            },
          }}
        >
          <motion.path
            initial="hidden"
            animate="visible"
            variants={cloverPathVariant}
            transition={{
              // delay: 0.25,
              duration: 3,
              ease: [1, 0, 0.8, 1],
            }}
            d="M75 290 l-29 -31 57 -57 57 -57 56 56 56 56 -30 34 c-25 27 -33 32
-43 22 -15 -15 -65 -17 -74 -3 -10 16 -19 12 -50 -20z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={cloverPathVariant}
            transition={{
              // delay: 0.25,
              duration: 3,
              ease: [1, 0, 0.8, 1],
            }}
            d="M15 200 c-15 -17 -16 -24 -7 -46 9 -18 9 -31 1 -46 -9 -16 -7 -24 12
-44 12 -13 28 -24 34 -24 16 0 85 73 85 91 0 19 -71 89 -91 89 -9 0 -24 -9
-34 -20z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={cloverPathVariant}
            transition={{
              // delay: 0.25,
              duration: 3,
              ease: [1, 0, 0.8, 1],
            }}
            d="M217 182 c-20 -21 -37 -45 -37 -53 0 -17 70 -89 86 -89 6 0 21 11 33
24 19 20 21 28 12 45 -9 15 -9 27 -1 42 9 16 8 26 -5 45 -22 34 -45 30 -88
-14z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={cloverPathVariant}
            transition={{
              // delay: 0.25,
              duration: 3,
              ease: [1, 0, 0.8, 1],
            }}
            d="M120 75 l-34 -35 22 -22 c17 -17 25 -19 33 -11 9 9 18 9 32 2 15 -9
24 -7 40 10 l21 21 -34 35 c-19 19 -37 35 -40 35 -3 0 -21 -16 -40 -35z"
          />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
};

export default FakeLoader;
