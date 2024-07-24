import "./index.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Menu from "./components/Menu/Menu"
import NavMenu from "./components/NavMenu/NavMenu"
import User from "./components/User/User"
import Sponsors from "./components/Sponsors/Sponsors"

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route exact path="/" element={<NavMenu />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
