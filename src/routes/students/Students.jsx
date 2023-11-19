import { useEffect, useState } from "react";

import { useStudents } from "../../context/studentsContext";
import Managment from "../../components/management/Management";
import Search from "../../components/search/search";
import Button from "../../components/button/button.component";
import Popup from "../../components/popup/Popup";
import ColorBar from "../../components/colorBar/ColorBar";
import StudentItem from "../../components/studentItem/StudentItem";
import FormStudent from "../../components/formStudent/FormStudent";

import "./Students.styles.css";

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

const Students = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { filter, dispatch } = useStudents();
  const [query, setQuery] = useState("");
  const [career, setCareer] = useState("all");
  const [status, setStatus] = useState("all");

  const tempStudents = filter.filter((student) =>
    `${student.nControl} ${student.name} ${student.lastName} ${student.motherLastName}`
      .toLowerCase()
      .includes(query.toLocaleLowerCase())
  );

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    dispatch({
      type: "filterStudents",
      payload: { career, status },
    });
  }, [career, dispatch, status]);

  return (
    <>
      <div className="header">
        <Search
          placeholder={"Buscar egresado por: Numero de control o Nombre"}
          onSetQuery={setQuery}
        />
        <span className="contaierIconMessage" title="Mensajes de egresado">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon iconMessage"
          >
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
          </svg>

          <span className="iconMessageNum">1</span>
        </span>
        <span
          className="contaierIconMessage--request"
          title="Solicitudes de egresados"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon iconMessage"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>

          <span className="iconMessageNum">1</span>
        </span>
      </div>
      <ColorBar />

      <Managment>
        <header className="options">
          <div className="options__filters">
            <h3>Filtro de búsqueda</h3>
            <div className="options__container">
              <div>
                <label htmlFor="careerFilter">Carrera: </label>
                <select
                  id="careerFilter"
                  className="select_style"
                  required={true}
                  onChange={(e) => {
                    setCareer(e.target.value);
                    dispatch({
                      type: "filterStudents",
                      payload: { career: e.target.value, status },
                    });
                  }}
                >
                  <option value="all">Todas</option>
                  {careers.map((career) => (
                    <option value={career.id} key={career.id}>
                      {career.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="filter">Estatus de título: </label>
                <select
                  name=""
                  id="filter"
                  className="select_status_style"
                  required={true}
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                    dispatch({
                      type: "filterStudents",
                      payload: { status: e.target.value, career },
                    });
                  }}
                >
                  <option value="all">Todos</option>
                  <option value="initial">Inicial</option>
                  <option value="secondary">Secundario</option>
                  <option value="finish">Termino</option>
                </select>
              </div>
            </div>
          </div>

          <div className="options__btn">
            <Button
              type="create"
              onClick={togglePopup}
              title="Crea un nuevo estudiante"
            >
              Crear
            </Button>
            <Button
              type="delete"
              title="Elimina Estudiantes"
              onClick={() => dispatch({ type: "deleteStudents" })}
            >
              Eliminar
            </Button>
          </div>
        </header>

        <ul className="list-data">
          {tempStudents.map((student, i) => (
            <StudentItem key={i} student={student} />
          ))}
        </ul>
      </Managment>
      {showPopup && (
        <Popup onClose={togglePopup}>
          <FormStudent onTogglePopup={togglePopup} />
        </Popup>
      )}
    </>
  );
};

export default Students;
