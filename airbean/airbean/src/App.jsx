import { useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import "./App.scss"
import Nav from "./components/Nav/Nav"

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/nav")
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<div>Loading...</div>} />
        <Route path="nav" element={<Nav />} />
      </Routes>
    </div>
  )
}

export default App
