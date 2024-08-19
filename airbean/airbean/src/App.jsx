import { Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingsPage"
import Nav from "../src/components/Nav/Nav"
import Menu from "../src/components/Menu/Menu"

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  )
}

export default App
