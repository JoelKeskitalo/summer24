import "./index.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Menu from "./components/Menu/Menu"
import NavMenu from "./components/NavMenu/NavMenu"
import User from "./components/User/User"
import Sponsors from "./components/Sponsors/Sponsors"
import Maximilian from "./components/Maximilian/Maximilian"

function App() {
  const randomBeerPrice = () => {
    const minimum = 50
    const maximum = 500
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
  }

  const beerPrice = randomBeerPrice()

  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route exact path="/" element={<NavMenu />} />
            <Route path="/menu" element={<Menu dynamicPrice={beerPrice} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/user" element={<User />} />
            <Route path="/maximilian" element={<Maximilian />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
