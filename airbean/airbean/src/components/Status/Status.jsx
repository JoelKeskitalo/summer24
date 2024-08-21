import "./Status.scss"
import { Link } from "react-router-dom"
import helecopterImage from "../../assets/pictures/helecopter.png"

function Status() {
  return (
    <div className="statuspage-container">
      <p>Ordernummer: #12DV23F</p>
      <img src={helecopterImage}></img>
      <h1>Din beställning är på väg!</h1>
      <p>13 minuter...</p>
      <Link to="/nav">
        <button>Ok, cool!</button>
      </Link>
    </div>
  )
}

export default Status
