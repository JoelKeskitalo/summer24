import "./index.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Characters from "./components/Characters/Characters"
import Profile from "./components/Profile/Profile"
import Lore from "./components/Lore/Lore"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/lore" element={<Lore />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </Router>
  )
}

export default App
