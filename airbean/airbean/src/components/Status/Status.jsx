import "./Status.scss"
import helecopterImage from "../../assets/pictures/helecopter.png"

function Status() {
  return (
    <div className="statuspage-container">
      <p>Ordernummer: #12DV23F</p>
      <img src={helecopterImage}></img>
      <h1>Din beställning är på väg!</h1>
      <p>13 minuter...</p>
      <button>Ok, cool!</button>
    </div>
  )
}

export default Status
