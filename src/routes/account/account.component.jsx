import { useAuth } from "../../context/authContext";
import "./account.style.css";
import logo from "../../assets/logos/logo-profile.png";
import { useNavigate } from "react-router-dom";

export function Account() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1 className="text-3xl text-white">Cargando...</h1>;

  return (
    <div className="bg-willow-brook-100 mt-20 px-48 py-48 text-center rounded-3xl w-3/4">
      <div className="flex justify-center items-center mb-20">
        <img
          src={logo}
          alt=""
          className="w-72 img-thumbnail animate_animated animate_fadeInLeft rounded-cl"
        />
      </div>
      <h1 className="text-3xl bg-slate-900 text-white px-8 py-4 mb-20 rounded-3xl">
        Usuario: {user.displayName || user.email}
      </h1>
      <button
        className="text-3xl bg-eucalyptus-600 w-72 hover:bg-eucalyptus-800 text-white font-bold py-5 px-10 rounded-3xl focus:outline-none focus:shadow-outline text-center"
        onClick={handleLogout}
      >
        Cerrar Sesión
      </button>
    </div>
  );
}
