import { useState } from "react";
import { useAuth } from "./../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./../../components/alert/alert.component";

import logo from "./../../assets/logos/logo-ittla.jpeg";
import logoGoogle from "./../../assets/logos/logo-google.png";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
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
      if (error.code === "auth/user-not-found") {
        setError("No se encontró una cuenta con ese correo");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto px-4 py-20 text-center">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-3xl px-8 pt-20 pb-32 mb-10 text-2xl"
      >
        <div className="mb-20">
          <div className="flex justify-center items-center mb-10">
            <img
              src={logo}
              alt=""
              className="img-thumbnail animate_animated animate_fadeInLeft rounded-cl"
            />
          </div>
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
            className="shadow appearence-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center text-2xl mb-20"
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button className="bg-eucalyptus-600 w-72 hover:bg-eucalyptus-800 text-white font-bold py-5 px-10 mr-20 rounded-3xl focus:outline-none focus:shadow-outline text-center">
            Iniciar Sesión
          </button>

          <button
            className="bg-eucalyptus-600 w-72 hover:bg-eucalyptus-800 text-white font-bold py-5 px-10 rounded-3xl focus:outline-none focus:shadow-outline text-center"
            onClick={handleRegister}
          >
            Registrarse
          </button>
        </div>
      </form>
      <div className="flex mb-4 justify-center items-center mb-10 ">
        <img
          src={logoGoogle}
          alt=""
          className="w-16  img-thumbnail animate_animated animate_fadeInLeft rounded-cl"
        />
        <button
          className="bg-astronaut-900 hover:bg-astronaut-950 text-white font-bold py-5 px-10 rounded-full focus:outline-none focus:shadow-outline text-center text-2xl"
          onClick={handleGoogleSignin}
        >
          Iniciar Sesión con Google
        </button>
      </div>
    </div>
  );
}
