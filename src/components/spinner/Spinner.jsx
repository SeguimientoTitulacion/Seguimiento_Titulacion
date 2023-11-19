import { SyncLoader } from "react-spinners";
import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinner}>
      <SyncLoader color="#087f5b" size={20} margin={8} />
    </div>
  );
}

export default Spinner;
