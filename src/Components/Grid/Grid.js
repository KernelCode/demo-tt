function Grid(props) {
  return (
    <div
      className={props.className}
      style={{
        display: "flex",
        gap: 30,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

export default Grid;
