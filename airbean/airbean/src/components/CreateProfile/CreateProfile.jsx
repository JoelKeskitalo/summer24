import "./CreateProfile.scss"
import Header from "../Header/Header"

function CreateProfile() {
  return (
    <div className="createprofile-container">
      <header>
        <Header />
      </header>
      <main>
        <article className="create-profile">
          <h1>Välkommen till AirBean-familjen!</h1>
          <p>
            Genom att skapa ett konto nedan kan du spara och se din
            orderhistorik
          </p>
          <form className="simple-form">
            <div className="form-group">
              <label htmlFor="name">Namn</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">E-post:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <button type="submit">Skicka</button>
          </form>
        </article>
      </main>
    </div>
  )
}

export default CreateProfile
