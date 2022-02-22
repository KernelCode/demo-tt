import "./person.scss";
import Box from "../Box/Box";
function Person(props) {
  if (!props.data) return null;

  return (
    <div className={"person "} style={props.style}>
      <div className="num">{props.id}</div>
      <div className="image">
        <img src={require("../../assets/images/" + props.data.image)} alt="" />
      </div>
      <Box
        title={props.data.name}
        centred={"centred"}
        style={{ fontSize: 12 }}
      />
      <div className="title">{props.data.title}</div>
      <div className="body">{props.data.body}</div>
    </div>
  );
}

export default Person;
