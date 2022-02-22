import "./box.scss";

function Box(props) {
  if (!props.title) return null;
  return (
    <div
      className={`box ${props.className || ""} ${props.type || "fill"}`}
      style={props.centred ? { ...props.style, margin: "auto" } : props.style}
    >
      {props.title}
    </div>
  );
}

export default Box;
