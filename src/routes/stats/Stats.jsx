import ColorBar from "../../components/colorBar/ColorBar";
import { useStudents } from "../../context/studentsContext";
import Search from "./../../components/search/search";
import Graphic from "../../components/graphic/Graphic";

import styles from "./Stats.module.css";

const statusColor = {
  initial: "#364fc7",
  secondary: "#a61e4d",
  finish: "#2b8a3e",
};

const careers = [
  {
    id: "ingElectrica",
    name: "Ingeniería Eléctrica",
    shortName: "Eléctrica",
  },
  {
    id: "IngElectromecanica",
    name: "Ingeniería Electromecánica",
    shortName: "Electromecánica",
  },
  {
    id: "IngIndustrial",
    name: "Ingeniería Electromecanica",
    shortName: "Electromecanica",
  },
  {
    id: "IngMecanica",
    name: "Ingeniería Mecánica",
    shortName: "Mecánica",
  },
  {
    id: "IngMecatronica",
    name: "Ingeniería Mecatrónica",
    shortName: "Mecatrónica",
  },
  {
    id: "IngAdministracion",
    name: "Ingeniería en Administración",
    shortName: "Administración",
  },
  {
    id: "IngGestionEmpresarial",
    name: "Ingeniería en Gestión Empresarial",
    shortName: "IGE",
  },
  {
    id: "IngTecnologiasInformacionComunicaciones",
    name: "Ingeniería en Tecnologías de la Información y Comunicaciones",
    shortName: "ITICs",
  },
];

function Stats() {
  const { students, filter, dispatch } = useStudents();
  const totalStudents = students.length;
  const data = careers.map((career) => {
    return {
      id: career.id,
      name: career.shortName,
      students: students.filter((student) => student.career.id === career.id),
    };
  });

  data.unshift({ id: "all", name: "Todas las carreras", students });

  return (
    <div className={styles.stats}>
      <Search placeholder={"Buscar por tipo de carrera"} />

      <div className={styles.graphics}>
        {data.map((el) => (
          <Graphic data={el.students} title={el.name} key={el.id} />
        ))}
      </div>

      <ColorBar />
    </div> 
  );
}

export default Stats;
