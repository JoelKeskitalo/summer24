import "./Maximilian.scss"
import MaximilianInfoBox from "../MaximilianInfoBox/MaximilianInfoBox"
import BackButton from "../BackButton/BackButton"
import MaximilianCard from "./MaximilianCard"
import MaximilianSecondCard from "./MaximilianSecondCard"
import AlertButton from "./AlertButton"

function Maximilian() {
  const words = ["Hello", "Elden", "Ring", "Is", "Fun"]

  const handleClick = () => {
    alert("Intruder Alert!")
  }

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
      <div className="component-wrapper">
        <MaximilianCard name="FakeMaximilian">
          <p>Everything inside the Cards are considered CHILDREN!</p>
        </MaximilianCard>
        <MaximilianSecondCard
          name="Another Fake!"
          content={<p>You should be ashamed of yourself!</p>}
        />
      </div>
      <AlertButton clickHandler={handleClick} />
      <BackButton />
    </div>
  )
}

export default Maximilian
