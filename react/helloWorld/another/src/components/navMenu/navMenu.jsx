import "./NavMenu.scss"
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
              <li>Menu</li>
              <li>About</li>
              <li>Register User/login-user/profile</li>
              <li>Contact</li>
              <li>Sponsors</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavMenu
