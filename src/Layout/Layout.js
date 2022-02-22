import React from "react";
import "./layout.scss";

function Layout(props) {
  const { theme } = props;
  return (
    <div className={"layout layout-" + theme}>
      <div className="layout-contianer">{props.children}</div>
    </div>
  );
}

export default Layout;
