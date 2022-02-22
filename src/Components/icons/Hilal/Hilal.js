import "./Hilal.scss";

function Hilal(props) {
  return (
    <div className={"hilal"} onClick={props.toggleTheme}>
      <div
        className={"hilal-cover"}
        style={props.theme === "dark" ? { marginTop: -20 } : {}}
      ></div>
      <div className={"hilal-cir"}></div>
    </div>
  );
}

export default Hilal;
