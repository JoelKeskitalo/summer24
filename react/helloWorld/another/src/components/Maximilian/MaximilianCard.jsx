import "./Maximilian.scss"

function MaximilianCard({ name, children }) {
  return (
    <div className="maximilian-card">
      <h2>{name}</h2>
      {children}
    </div>
  )
}

export default MaximilianCard
