import "./Menu.scss"
import Footer from "../Footer/Footer"

function Menu(props) {
  return (
    <div className="main-box">
      <h1>Baratheons Beverages</h1>
      <div id="menu-box">
        <nav>
          <ul>
            <li>
              Kings Stag Ale<p className="price">{props.dynamicPrice}:-</p>
            </li>
            <li>
              Lions Roar Mead<p className="price">{props.dynamicPrice}:-</p>
            </li>
            <li>
              Bastards Bourbon<p className="price">{props.dynamicPrice}:-</p>
            </li>
            <li>
              Wildfire Whiskey<p className="price">{props.dynamicPrice}:-</p>
            </li>
            <li>
              Direwolf Draught<p className="price">{props.dynamicPrice}:-</p>
            </li>
            <li>
              Red Keep Red Wine<p className="price">{props.dynamicPrice}:-</p>
            </li>
            <li>
              Cerseis Sangria<p className="price">{props.dynamicPrice}:-</p>
            </li>
          </ul>
        </nav>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Menu
