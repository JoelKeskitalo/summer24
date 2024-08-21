import "./Header.scss"
import { Link } from "react-router-dom"
import navIcon from "../../assets/pictures/navicon.png"

function Header() {
  return (
    <div className="header-container">
      <Link to="/nav">
        <img src={navIcon} id="navigation-image"></img>
      </Link>
      <Link to="/cart" className="cart-icon-link">
        <div className="cart-icon"></div>
      </Link>
    </div>
  )
}

export default Header
