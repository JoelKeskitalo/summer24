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
          <li>
            <Link to="/about">Vårt kaffe</Link>
          </li>
          <hr />
          <li>
            <Link to="/createprofile">Min profil</Link>
          </li>
          <hr />
          <li>Orderstatus</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
