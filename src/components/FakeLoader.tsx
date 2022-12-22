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
            delay: 1.8,
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
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 450 450"
        width={100}
        height={100}
        className={styles.cloverIcon}
      >
        <motion.path
          initial="hidden"
          animate="visible"
          variants={cloverPathVariant}
          transition={{
            delay: 0.25,
            duration: 3,
            ease: [1, 0, 0.8, 1],
          }}
          stroke={klevGreen}
          strokeWidth={15}
          fill="none"
          d="m420.149,139.334c4.116-20.023-3.089-37.592-20.835-50.805-8.897-6.624-19.143-9.982-30.451-9.982-10.991,0-22.809,3.109-35.602,9.407 12.868-26.123 12.73-48.206-0.501-65.979-10.857-14.581-24.309-21.975-39.985-21.975-19.901,0-38.241,12.205-50.376,20.281-2.504,1.667-5.463,3.637-7.399,4.742-1.936-1.106-4.895-3.075-7.4-4.742-12.136-8.076-30.476-20.281-50.375-20.281-15.675,0-29.128,7.394-39.984,21.976-13.231,17.773-13.37,39.854-0.502,65.978-12.793-6.298-24.609-9.406-35.601-9.406-11.309,0-21.554,3.358-30.452,9.982-17.747,13.213-24.951,30.78-20.835,50.805 3.21,15.617 12.417,29.452 19.141,39.555 1.666,2.505 3.637,5.464 4.742,7.4-1.106,1.936-3.075,4.896-4.742,7.399-6.723,10.103-15.931,23.938-19.141,39.556-4.116,20.024 3.089,37.592 20.835,50.805 8.895,6.622 19.14,9.98 30.45,9.982 0.005,0 0.005,0 0.009,0 10.987-0.001 22.803-3.109 35.593-9.406-12.867,26.123-12.729,48.206 0.502,65.978 10.856,14.582 24.309,21.977 39.984,21.977 18.529,0 35.701-10.578 47.775-18.556v115.975h20v-115.977c12.075,7.977 29.247,18.556 47.775,18.556 15.676,0 29.128-7.395 39.984-21.977 13.231-17.772 13.37-39.854 0.501-65.978 12.793,6.299 24.61,9.407 35.602,9.407 11.309,0 21.554-3.358 30.451-9.982 17.747-13.212 24.951-30.78 20.835-50.804-3.21-15.617-12.417-29.453-19.141-39.556-1.667-2.505-3.636-5.464-4.742-7.4 1.105-1.935 3.075-4.895 4.742-7.399 6.725-10.102 15.933-23.938 19.143-39.556zm-35.791,65.436c15.942,23.956 27.172,45.249 3.012,63.236-5.446,4.055-11.5,6.025-18.508,6.025-18.967,0-43.826-14.105-73.888-41.921-9.323-10.036-18.132-18.522-24.58-24.733-2.385-2.297-4.444-4.28-5.985-5.821l-14.142,14.143c1.543,1.543 3.529,3.604 5.829,5.992 6.21,6.446 14.693,15.253 24.726,24.571 17.016,18.391 29.022,35.059 35.686,49.544 8.253,17.941 8.322,31.959 0.211,42.854-6.973,9.366-14.805,13.92-23.942,13.92-13.853,0-28.558-9.786-39.294-16.932-8.126-5.408-13.031-8.672-18.48-8.672-5.45,0-10.354,3.265-18.48,8.672-10.736,7.146-25.44,16.932-39.295,16.932-9.137,0-16.969-4.554-23.942-13.92-8.111-10.896-8.042-24.912 0.21-42.853 6.663-14.484 18.667-31.151 35.683-49.541 10.035-9.32 18.517-18.126 24.727-24.572 2.301-2.389 4.288-4.452 5.831-5.995l-14.142-14.143c-1.541,1.541-3.601,3.524-5.985,5.821-6.45,6.212-15.26,14.699-24.583,24.736-30.063,27.815-54.918,41.918-73.878,41.918-0.001,0-0.005,0-0.006,0-7.011-0.001-13.065-1.972-18.51-6.025-24.161-17.987-12.93-39.281 3.012-63.237 5.408-8.126 8.672-13.03 8.672-18.48 0-5.449-3.264-10.354-8.672-18.48-15.945-23.956-27.176-45.249-3.015-63.237 5.446-4.055 11.5-6.025 18.508-6.025 18.967,0 43.826,14.104 73.887,41.92 9.32,10.035 18.128,18.519 24.576,24.73 2.387,2.299 4.448,4.284 5.99,5.827l14.143-14.143c-1.542-1.542-3.527-3.603-5.826-5.989-6.21-6.447-14.695-15.256-24.73-24.576-17.016-18.391-29.021-35.059-35.685-49.543-8.253-17.94-8.322-31.958-0.21-42.854 6.973-9.366 14.804-13.919 23.942-13.919 13.853,0 28.558,9.786 39.295,16.932 8.126,5.408 13.031,8.672 18.48,8.672 5.45,0 10.355-3.264 18.48-8.672 10.737-7.146 25.441-16.932 39.295-16.932 9.138,0 16.969,4.553 23.942,13.919 8.111,10.896 8.042,24.913-0.21,42.854-6.663,14.484-18.668,31.151-35.684,49.542-10.037,9.321-18.519,18.128-24.729,24.575-2.299,2.387-4.285,4.448-5.828,5.991l14.142,14.143c1.542-1.542 3.603-3.528 5.99-5.827 6.448-6.211 15.256-14.695 24.576-24.73 30.063-27.815 54.922-41.92 73.887-41.92 7.008,0 13.062,1.971 18.508,6.025 24.161,17.988 12.931,39.281-3.012,63.237-5.407,8.126-8.671,13.03-8.671,18.479-5.68434e-14,5.45 3.265,10.356 8.672,18.482z"
        />
      </motion.svg>
    </motion.div>
  );
};

export default FakeLoader;
