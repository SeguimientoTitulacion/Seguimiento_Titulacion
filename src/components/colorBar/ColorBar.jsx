import "./ColorBar.css";

function ColorBar() {
  return (
    <div className="container">
      <h4>COLORES ESTATUS</h4>
      <div className="colorBar">
        <div className="colorBarGroup">
          <span style={{ backgroundColor: "#364fc7" }}></span>
          <p>Inicial</p>
        </div>
        <div className="colorBarGroup">
          <span style={{ backgroundColor: "#a61e4d" }}></span>
          <p>Secundario</p>
        </div>
        <div className="colorBarGroup">
          <span style={{ backgroundColor: "#2b8a3e" }}></span>
          <p>Terminado</p>
        </div>
      </div>
    </div>
  );
}

export default ColorBar;
