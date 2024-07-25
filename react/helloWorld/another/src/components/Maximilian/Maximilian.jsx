import "./Maximilian.scss"
import MaximilianInfoBox from "../MaximilianInfoBox/MaximilianInfoBox"
import BackButton from "../BackButton/BackButton"

function Maximilian() {
  const words = ["Hello", "Elden", "Ring", "Is", "Fun"]

  return (
    <div className="main-box">
      <h1>Maximilians playground</h1>
      <div>
        <MaximilianInfoBox
          title="Maximilians Playground"
          text="Dynamic text in the future"
          wordsOutput={words}
        />
      </div>
      <BackButton />
    </div>
  )
}

export default Maximilian
