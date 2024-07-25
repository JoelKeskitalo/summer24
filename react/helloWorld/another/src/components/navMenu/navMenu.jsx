import "./NavMenu.scss"
import { Link } from "react-router-dom"
import Header from "../Header/Header"

function NavMenu() {
  const barNames = ["Bar", "Pub", "Bastards", "Beverages"]

  const getRandomNumber = (maxNumber) => {
    return Math.floor(Math.random() * (maxNumber + 1))
  }

  const randomlyGeneratedBarname = barNames[getRandomNumber(3)]

  return (
    <div className="main-box">
      <header>
        <Header />
      </header>
      <h1>Baratheons {randomlyGeneratedBarname}</h1>
      <div className="content-box">
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
              <li>
                <Link to="/maximilian">Maximilians Playground</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavMenu
