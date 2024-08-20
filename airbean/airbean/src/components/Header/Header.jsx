import "./Header.scss"
import { Link } from "react-router-dom"
import navIcon from "../../assets/pictures/navicon.png"

function Header() {
  return (
    <div className="header-container">
      <Link to="/nav">
        <img src={navIcon} id="navigation-image"></img>
      </Link>
    </div>
  )
}

export default Header
