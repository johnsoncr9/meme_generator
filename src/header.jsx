import Face from "./assets/troll-face.png";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header--left_container">
        <img className="header--pic" src={Face} alt="troll face" />
        <h2 className="header--title">Meme Generator</h2>
      </div>
      <div className="header--right_container"></div>
    </header>
  );
}

export default Header;
