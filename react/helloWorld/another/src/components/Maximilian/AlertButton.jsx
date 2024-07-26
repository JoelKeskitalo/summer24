function AlertButton({ clickHandler }) {
  return (
    <div id="button-wrapper">
      <button className="reusable-button" onClick={clickHandler}>
        Alert!
      </button>
    </div>
  )
}

export default AlertButton
