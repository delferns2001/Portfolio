import "./NavBar.css";

function NavBar(name) {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <h4>Delton Fernandes</h4>
      </div>

      <ul className="nav-links">
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="About-Me">About Me</a>
        </li>
        <li>
          <a href="Contact">Contact</a>
        </li>
        <li>
          <a href="Projects">Projects</a>
        </li>
      </ul>

      <div className="burger">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </nav>
  );
}
export default NavBar;
