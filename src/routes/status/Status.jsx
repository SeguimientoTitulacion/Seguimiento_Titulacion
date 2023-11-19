import { useEffect, useState } from "react";

import { useStudents } from "../../context/studentsContext";
import Managment from "../../components/management/Management";
import Search from "../../components/search/search";
import Button from "../../components/button/button.component";
import Popup from "../../components/popup/Popup";
import StudentItem from "../../components/studentItem/StudentItem";
import FormStudent from "../../components/formStudent/FormStudent";

import "./Status.styles.css";

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
  const [selectedStatusText, setSelectedStatusText] = useState("Inicial"); // Agregar esta línea

  const tempStudents = filter.filter((student) =>
    `${student.nControl} ${student.name} ${student.lastName} ${student.motherLastName}`
      .toLowerCase()
      .includes(query.toLocaleLowerCase())
  );

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleUpdate = () => {
    // Despachar la acción para actualizar estudiantes
    dispatch({
      type: "updateStudents",
      payload: { status: selectedStatusText },
    });
  };

  useEffect(() => {
    dispatch({
      type: "filterStudents",
      payload: { career, status },
    });
    console.log("Actualizando estudiantes con estado:", selectedStatusText);
  }, [career, dispatch, status, selectedStatusText]);

  return (
    <>
      <div className="header">
        <Search
          placeholder={"Buscar egresado por: Numero de control o Nombre"}
          onSetQuery={setQuery}
        />
        <span className="contaierIconMessage" title="Mensajes de egresado">
          {/* ... (código del icono de mensaje) */}
          <span className="iconMessageNum">1</span>
        </span>
        <span
          className="contaierIconMessage--request"
          title="Solicitudes de egresados"
        >
          {/* ... (código del icono de solicitud) */}
          <span className="iconMessageNum">1</span>
        </span>
      </div>

      <Managment>
        <header className="options_estatus">
          <div className="options__estatus_filters">
            <h3>Actualización de estatus</h3>
            <div className="options__estatus_container">
              <div className="filter_estatus_options">
                <label>Estatus de título: </label>
                <select
                  name=""
                  id="filter_estatus_upd"
                  className="select_status_style_upd"
                  required={true}
                  value={selectedStatusText}
                  onChange={(e) => setSelectedStatusText(e.target.value)}
                >
                  <option value="initial">Inicial</option>
                  <option value="secondary">Secundario</option>
                  <option value="finish">Termino</option>
                </select>
              </div>
            </div>

            <br /><br />

            <div className="options__btn">
              <Button
                type="update"
                onClick={handleUpdate}
                title="Actualizar Estudiantes"
              >
                Actualizar
              </Button>
            </div>
          </div>
        </header>
      </Managment>

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
                <label>Estatus de título: </label>
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
