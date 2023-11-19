import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/alert/alert.component";

import logo from "./../../assets/logos/logo-register.png";

export function Register() {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Correo inválido");
      }
      if (error.code === "auth/missing-email") {
        setError("Ingrese un correo");
      }
      if (error.code === "auth/missing-password") {
        setError("Ingrese una contraseña");
      }
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe contener al menos 6 caracteres");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Ese correo ya se encuentra en uso");
      }
    }
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto px-4 py-20 text-center">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-3xl px-8 pt-20 pb-32 mb-10 text-2xl"
      >
        <div className="mb-20">
          <div className="flex justify-center items-center mb-20">
            <img
              src={logo}
              alt=""
              className="w-48 img-thumbnail animate_animated animate_fadeInLeft rounded-cl"
            />
          </div>
          <label htmlFor="name" className="block text-2xl font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre"
            className="shadow appearence-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center text-2xl"
            onChange={handleChange}
          />
        </div>

        <div className="mb-20">
          <label htmlFor="email" className="block text-2xl font-bold mb-2">
            Correo
          </label>
          <input
            type="email"
            name="email"
            placeholder="tucorreo@outlook.com"
            className="shadow appearence-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center text-2xl"
            onChange={handleChange}
          />
        </div>

        <div className="mb-20">
          <label htmlFor="password" className="block text-2xl font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            className="shadow appearence-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center text-2xl"
            onChange={handleChange}
          />
        </div>

        <button className="bg-eucalyptus-600 w-72 hover:bg-eucalyptus-800 text-white font-bold py-5 px-10 rounded-3xl focus:outline-none focus:shadow-outline text-center">
          Registrar
        </button>
      </form>
    </div>
  );
}
