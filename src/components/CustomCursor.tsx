import React, { useEffect, useState } from "react";
import { useCursorStore } from "../store/cursor";
import styles from "../styles/components/CustomCursor.module.scss";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 400, y: 400 });
  const { cursorType } = useCursorStore();

  const onMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorType) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "unset";
    }
  }, [cursorType]);

  return (
    <>
      {cursorType ? (
        <>
          <div
            className={styles.customCursor}
            style={{
              top: `${mousePosition.y}px`,
              left: `${mousePosition.x}px`,
            }}
          ></div>
          <div
            className={styles.customCursorInner}
            style={{
              top: `${mousePosition.y}px`,
              left: `${mousePosition.x}px`,
            }}
          ></div>
        </>
      ) : null}
    </>
  );
};

export default CustomCursor;
