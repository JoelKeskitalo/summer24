import "./NavMenu.scss"

function NavMenu() {
  return (
    <div className="main-box">
      <div className="content-box">
        <h1>Baratheons Bar</h1>
        <div id="navMenu-container">
          <nav>
            <ul>
              <li>Navigation Menu</li>
              <li>Beverage Menu</li>
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
