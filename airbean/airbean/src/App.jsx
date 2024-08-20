import { Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingsPage"
import Nav from "../src/components/Nav/Nav"
import Menu from "../src/components/Menu/Menu"
import About from "./components/About/About"
import CreateProfile from "./components/CreateProfile/CreateProfile"
import Status from "./components/Status/Status"

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </div>
  )
}

export default App
