// Huvudkomponenten
function App() {
  const message = "Hello from App Component!"

  const handleButtonClick = () => {
    alert("Button clicked!")
  }

  return (
    <div>
      <h1>App Component</h1>
      <ChildComponent message={message} onButtonClick={handleButtonClick} />
    </div>
  )
}

// Barnkomponent som tar emot props
function ChildComponent({ message, onButtonClick }) {
  return (
    <div>
      <h1>Child Component</h1>
      <p>{message}</p>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  )
}
