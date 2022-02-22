import "./section.scss";
function Section(props) {
  return (
    <section
      className={props.bg ? "bg" : ""}
      style={{ ...props.style, marginTop: 30, marginBottom: 30 }}
    >
      {props.children}
    </section>
  );
}

export default Section;
