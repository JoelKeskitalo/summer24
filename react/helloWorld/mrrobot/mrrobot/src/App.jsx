import "./index.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Header from "./components/Header/Header"
import Info from "./components/Info/Info"

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/info" element={<Info />} />
          </Routes>
        </main>
      </>
    </Router>
  )
}

export default App
