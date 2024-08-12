import "./Header.scss"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/lore">Lore</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
