import "./Home.scss"
import warhammerLogo from "../../assets/warhammer40klogo.png"
import goldenAquila from "../../assets/goldenaquila.png"

function Home() {
  return (
    <div className="home-content">
      <img src={warhammerLogo} id="warhammer-logo" />
      <img src={goldenAquila} id="aquila-logo" />
    </div>
  )
}

export default Home
