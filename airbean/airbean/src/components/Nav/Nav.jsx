import "./Nav.scss"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <Link to="/menu">Meny</Link>
          </li>
          <hr />
          <li>Vårt kaffe</li>
          <hr />
          <li>Min profil</li>
          <hr />
          <li>Orderstatus</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
