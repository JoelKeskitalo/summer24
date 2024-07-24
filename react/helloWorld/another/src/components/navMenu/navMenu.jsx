import "./NavMenu.scss"
import { Link } from "react-router-dom"
import Header from "../Header/Header"

function NavMenu() {
  return (
    <div className="main-box">
      <header>
        <Header />
      </header>
      <div className="content-box">
        <h1>Baratheons Bar</h1>
        <div id="navMenu-container">
          <nav>
            <ul>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/user">Register User/login-user/profile</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/sponsors">Sponsors</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavMenu
