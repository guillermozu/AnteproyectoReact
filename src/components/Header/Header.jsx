import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from "../../assets/logo celu.jpg";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="logo reactiva" />
          <span>Celu Loza</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
