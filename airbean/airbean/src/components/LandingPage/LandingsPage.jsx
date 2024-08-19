import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./LandingPage.scss"

function LandingPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/nav")
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate])

  return <div className="landing-page">Loading...</div>
}

export default LandingPage
