import "./Cart.scss"

function Cart() {
  return (
    <div className="cart-container">
      <h1>Din beställning</h1>
      <article className="order-container">
        <div className="order-item">
          <h2>Bryggkaffe ..........</h2>
          <p>98 kr</p>
        </div>
      </article>
      <div className="price-container">
        <h2>Total ..........</h2>
        <p>inkl moms + drönarleverans</p>
      </div>
    </div>
  )
}

export default Cart
