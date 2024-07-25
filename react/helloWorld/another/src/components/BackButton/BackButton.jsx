import "../BackButton/BackButton.scss"
import { useNavigate } from "react-router-dom"
import backImage from "../../resources/pictures/back.png"

function BackButton(props) {
  const navigate = useNavigate()
  const goToMainPage = () => {
    navigate("/")
  }

  return (
    <div>
      <button onClick={goToMainPage}>
        <img className="back-image" src={backImage}></img>
      </button>
    </div>
  )
}

export default BackButton
