import "./index.scss"
import NavMenu from "./components/NavMenu/NavMenu"
import Header from "./components/Header/Header"

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <body>
        <NavMenu />
      </body>
    </>
  )
}

export default App

// use for react-router later
