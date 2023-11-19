import { useEffect } from "react";
import styles from "./Popup.module.css";
import { useKey } from "../../hooks/useKey";

function Popup({ children, onClose }) {
  useKey("Escape", onClose);

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.popup}>
        <button className={styles.close} onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </>
  );
}

export default Popup;
