import { useStudents } from "../../context/studentsContext";
import "./StudentItem.css";

const statusColor = {
  initial: "#364fc7",
  secondary: "#a61e4d",
  finish: "#2b8a3e",
};

// const career = [
//   {
//     id: "ingElectrica",
//     career: "Ingeniería Eléctrica",
//   },
//   {
//     id: "IngElectromecanica",
//     career: "Ingeniería Electromecánica",
//   },
//   {
//     id: "IngIndustrial",
//     career: "Ingeniería Electromecanica",
//   },
//   {
//     id: "Ingeniería Mecánica",
//     career: "IngMecanica",
//   },
//   {
//     id: "IngMecatronica",
//     career: "Ingeniería Mecatrónica",
//   },
//   {
//     id: "Ingeniería en Administración",
//     career: "Ingeniería en Administración",
//   },
//   {
//     id: "IngGestionEmpresarial",
//     career: "Ingeniería en Gestión Empresarial",
//   },
//   {
//     id: "IngTecnologiasInformacionComunicaciones",
//     career: "Ingeniería en Tecnologías de la Información y Comunicaciones",
//   },
// ];

function StudentItem({ student }) {
  const { filter, dispatch } = useStudents();

  return (
    <li
      className="list__item"
      style={{ backgroundColor: statusColor[student.status] }}
    >
      <input
        type="checkbox"
        className="options__checkbox"
        onChange={(e) => {
          e.target.checked
            ? dispatch({ type: "addStudentToModify", payload: student })
            : dispatch({
                type: "deleteStudentToModify",
                payload: student.id,
              });
        }}
      />
      <div className="options__group">
        <span className="options__info">Numero de Control </span>
        <p>{student.nControl}</p>
      </div>
      <div className="options__group">
        <span className="options__info">Nombre completo </span>
        <p>{`${student.name} ${student.lastName} ${student.motherLastName}`}</p>
      </div>
      <div className="options__group">
        <span className="options__info">Carrera </span>
        <p>{student.career.shortName}</p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </li>
  );
}

export default StudentItem;
