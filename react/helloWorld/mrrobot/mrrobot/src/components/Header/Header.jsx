import "./Header.scss"
import { Link } from "react-router-dom"
import mrrobotLogo from "../../assets/pictures/mrrobot-logo.png"

function Header() {
  return (
    <header className="header">
      <img id="header-logo" src={mrrobotLogo}></img>
      <nav>
        <ul>
          <li>Home</li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>User</li>
          <li>Archives</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
