import { useState } from "react";
import { useStudents } from "../../context/studentsContext";

import "./FormStudent.css";

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

function FormStudent({ onTogglePopup }) {
  const { createStudent } = useStudents();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [motherLastName, setMotherLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nControl, setNControl] = useState("");
  const [status, setStatus] = useState("initial");
  const [career, setCareer] = useState("");

  const handleResetForm = () => {
    setName("");
    setLastName("");
    setMotherLastName("");
    setEmail("");
    setNControl("");
    setCareer("");
    setStatus("initial");
  };

  return (
    <div className="studentForm">
      <h3>REGISTRO DE EGRESADO</h3>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          createStudent({
            name,
            lastName,
            motherLastName,
            email,
            nControl,
            status,
            career: careers.find((el) => el.id === career),
          });
          onTogglePopup();
          handleResetForm();
        }}
      >
        <div className="group">
          <label htmlFor="name">Nombre(s)</label>
          <input
            id="name"
            type="text"
            placeholder="Santiago aldahir"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="lastName">Apellido paterno</label>
          <input
            id="lastName"
            type="text"
            placeholder="Rush"
            required={true}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="motherLastName">Apellido materno</label>
          <input
            id="motherLastName"
            type="text"
            placeholder="Smith"
            required={true}
            value={motherLastName}
            onChange={(e) => setMotherLastName(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="email">Correo electronico</label>
          <input
            id="email"
            type="email"
            placeholder="alumn@example.com"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="nControl">Numero de control</label>
          <input
            id="nControl"
            type="text"
            placeholder="20251055"
            required={true}
            value={nControl}
            onChange={(e) => setNControl(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="carreraFilter">Carrera: </label>
          <select
            id="carreraFilter"
            required={true}
            value={career}
            onChange={(e) => setCareer(e.target.value)}
          >
            <option>Escoja carrera</option>
            {careers.map((career) => (
              <option key={career.id} value={career.id}>
                {career.name}
              </option>
            ))}
          </select>
        </div>
        <div className="group">
          <label htmlFor="status">Estatus actual</label>
          <select
            name=""
            id="status"
            required={true}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="initial">Inicial</option>
            <option value="secondary">Secundario</option>
            <option value="finish">Termino</option>
          </select>
        </div>

        <button className="btnForm">Guardar registro</button>
      </form>
    </div>
  );
}

export default FormStudent;
