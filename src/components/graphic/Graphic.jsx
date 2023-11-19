import PieChart from "./../PieChart";
import styles from "./Graphic.module.css";

const statusColor = {
  initial: "#364fc7",
  secondary: "#a61e4d",
  finish: "#2b8a3e",
};

function getPercent(num, total) {
  if (total === 0) total = 1;

  return Math.floor((num / total) * 100);
}

function Graphic({ data = [], title = "" }) {
  const initial = data.filter((student) => student.status === "initial").length;
  const secondary = data.filter(
    (student) => student.status === "secondary"
  ).length;
  const finish = data.filter((student) => student.status === "finish").length;
  const dataLength = data.length;

  return (
    <div className={styles.graphic}>
      <h3>{title}</h3>
      <div className={styles.graphicContainer}>
        <PieChart
          data={[
            {
              color: statusColor.secondary,
              quantity: secondary,
            },
            {
              color: statusColor.initial,
              quantity: initial,
            },
            {
              color: statusColor.finish,
              quantity: finish,
            },
          ]}
        />

        <div className={styles.graphicInfo}>
          <div className={styles.graphicInfoGroup}>
            <span style={{ backgroundColor: statusColor.initial }}></span>
            <p>
              En proceso inicial:
              {initial} [ {getPercent(initial, dataLength)}
              %]
            </p>
          </div>

          <div className={styles.graphicInfoGroup}>
            <span style={{ backgroundColor: statusColor.secondary }}></span>
            <p>
              En proceso secundario: {secondary} [{" "}
              {getPercent(secondary, dataLength)}
              %]
            </p>
          </div>
          <div className={styles.graphicInfoGroup}>
            <span style={{ backgroundColor: statusColor.finish }}></span>

            <p>
              Terminado:{finish} [ {getPercent(finish, dataLength)}
              %]
            </p>
          </div>

          <p>Total de egresados: {dataLength} </p>
        </div>
      </div>
    </div>
  );
}

export default Graphic;
