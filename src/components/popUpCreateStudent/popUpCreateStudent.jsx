import "./popUpCreateStudent.css";

const PopUpCreateStudent = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-1/2 h-1/2">
        <h2 className="text-4xl mb-4">Crear nuevo usuario</h2>
        <form action="">
          <div>
            <label className="text-lg">Numero de control</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ingresa numero de control"
            />
          </div>
          <div>
            <label className="text-lg">Nombre completo</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ingresa numero de control"
            />
          </div>
        </form>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default PopUpCreateStudent;
