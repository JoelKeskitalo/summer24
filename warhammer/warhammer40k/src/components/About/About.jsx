import "./About.scss"
import chaosSpaceMarine from "../../assets/chaosspacemarine.png"

function About() {
  return (
    <div className="content-box">
      <h1>About</h1>
      <div id="infobox-container">
        <section className="info-box">
          <h2>The Game</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quo
            quod fugit, dicta sapiente at perferendis harum laudantium nam sit.
            Repellat laboriosam minima quos ipsum culpa in minus, laborum
            ratione!
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
            vitae quas rem obcaecati error quaerat ducimus alias consequatur
            modi eum sapiente deleniti delectus. Molestias quod perferendis
            tempora doloremque! Voluptatem, vitae.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
            vitae quas rem obcaecati error quaerat ducimus alias consequatur
            modi eum sapiente deleniti delectus. Molestias quod perferendis
            tempora doloremque! Voluptatem, vitae.
          </p>
          <img src={chaosSpaceMarine} id="symbol-picture"></img>
        </section>
        <section className="info-box">
          <h2>The Idea</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quo
            quod fugit, dicta sapiente at perferendis harum laudantium nam sit.
            Repellat laboriosam minima quos ipsum culpa in minus, laborum
            ratione!
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
            vitae quas rem obcaecati error quaerat ducimus alias consequatur
            modi eum sapiente deleniti delectus. Molestias quod perferendis
            tempora doloremque! Voluptatem, vitae.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
            vitae quas rem obcaecati error quaerat ducimus alias consequatur
            modi eum sapiente deleniti delectus. Molestias quod perferendis
            tempora doloremque! Voluptatem, vitae.
          </p>
          <img src={chaosSpaceMarine} id="symbol-picture"></img>
        </section>
      </div>
    </div>
  )
}

export default About
