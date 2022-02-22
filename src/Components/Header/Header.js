import "./header.scss";
import logo from "../../assets/images/logo.png";
import Ham from "../icons/Ham/Ham";
import Hilal from "../icons/Hilal/Hilal";
import HeroLinks from "../Hero-Links/HeroLinks";

function Header(props) {
  return (
    <div className={"header-continer"}>
      <div className="header">
        <img className={"logo"} src={logo} alt="logo" style={{ width: 190 }} />
        <div className="header-mnu">
          <div className={"mnu"}>
            <Ham />
            <span className={"mnu-title"}>MENU</span>
          </div>
          <Hilal toggleTheme={props.toggleTheme} theme={props.theme} />
        </div>
      </div>
      <HeroLinks />
    </div>
  );
}

export default Header;
