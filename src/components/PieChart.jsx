const containerPie = {};

function PieChart({ data, size }) {
  const total = data.reduce((acc, cur) => acc + cur.quantity, 0);
  let gradient = "conic-gradient(";
  let temp = 0;

  data.forEach((element, i) => {
    const percent = Math.floor((element.quantity / total) * 100);

    gradient =
      gradient +
      `${element.color} 0 ${temp + percent}% ${
        i < data.length - 1 ? "," : ")"
      } `;
    temp += percent;
  });

  if (data.every((el) => el.quantity === 0))
    gradient = "conic-gradient(#ccc 0 100%)";

  return (
    <div
      className="back"
      style={{
        width: "100px",
        height: "100px",
        background: gradient,
        borderRadius: "50%",
      }}
    ></div>
  );
}

export default PieChart;
// conic-gradient(red 0 %50, blue 0 100%)
