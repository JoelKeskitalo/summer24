import "./Menu.scss"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import addImage from "../../assets/pictures/add.png"

function Menu() {
  return (
    <div className="menu-container">
      <header>
        <Header />
      </header>
      <main>
        <h1>Meny</h1>
        <div className="coffee-menu-container">
          <div className="coffee-item">
            <img src={addImage}></img>
            <h2>Bryggkaffe...............</h2>
            <p className="coffee-price">49 kr</p>
          </div>
          <div className="coffee-item">
            <img src={addImage}></img>
            <h2>Caffé Doppio...............</h2>
            <p className="coffee-price">49 kr</p>
          </div>
          <div className="coffee-item">
            <img src={addImage}></img>
            <h2>Cappucino...............</h2>
            <p className="coffee-price">49 kr</p>
          </div>
          <div className="coffee-item">
            <img src={addImage}></img>
            <h2>Latte Macchiato...............</h2>
            <p className="coffee-price">49 kr</p>
          </div>
          <div className="coffee-item">
            <img src={addImage}></img>
            <h2>Kaffe Latte...............</h2>
            <p className="coffee-price">49 kr</p>
          </div>
          <div className="coffee-item">
            <img src={addImage}></img>
            <h2>Cortado...............</h2>
            <p className="coffee-price">49 kr</p>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Menu
