import "../BackButton/BackButton.scss"
import { useNavigate } from "react-router-dom"
import backImage from "../../resources/pictures/back.png"

function BackButton() {
  const navigate = useNavigate()
  const goToMainPage = () => {
    navigate("/")
  }

  return (
    <div>
      <img className="back-image" src={backImage} onClick={goToMainPage}></img>
    </div>
  )
}

export default BackButton
