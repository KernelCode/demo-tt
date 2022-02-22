import "./Line.scss";
function Line(props) {
  return (
    <div
      className="long-line"
      style={{ ...props.style, order: "none", borderTop: "3px dotted " }}
    ></div>
  );
}

export default Line;
