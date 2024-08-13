import "./Characters.scss"
import bloodEater from "../../assets/characters/bloodeater.png"
import eldar from "../../assets/characters/eldar.png"
import templar from "../../assets/characters/templar.png"
import ultramarine from "../../assets/characters/ultramarine.png"

function Characters() {
  const characters = [
    {
      name: "The Bloodeater",
      description:
        "The Bloodeater stands as a fearsome figure within the chaos-worshipping World Eaters legion. Driven by an insatiable bloodlust, he revels in close combat, slaughtering enemies with brutal precision. Once a noble Space Marine, the dark allure of Khorne has twisted him into a berserker, thirsting for endless carnage. Clad in blood-red armor adorned with skulls and chains, his mere presence strikes terror into friend and foe alike. The Bloodeater's devotion to Khorne ensures that no battle ends without a river of blood left in his wake.",
      image: bloodEater,
    },
    {
      name: "Eldar Farseer",
      description:
        "The Eldar Farseer is a master of divination and one of the most powerful psykers in the galaxy. Hailing from the ancient and enigmatic race of the Eldar, this Farseer guides their people through the webway, steering them away from doom and towards destiny. With a mind attuned to the warp, the Farseer can foresee the many possible futures, manipulating events to the benefit of the Eldar. Armed with a rune-inscribed staff and adorned in flowing robes of shimmering wraithbone, they are both revered and feared, as their visions often predict doom as well as salvation.",
      image: eldar,
    },
    {
      name: "Black Templar",
      description:
        "The Black Templar Initiate is a zealous warrior, sworn to eternal crusade in the name of the Emperor. With faith as his shield and bolter as his sword, this Initiate knows no fear as he charges into battle against the enemies of humanity. Clad in the iconic black power armor and bearing the white cross of the Templars, he is relentless in his pursuit of heretics, mutants, and xenos. His unwavering devotion to the Emperor's cause drives him to seek glory and martyrdom, forever striving to uphold the honor of his Chapter.",
      image: templar,
    },
    {
      name: "Ultramarine Sergeant",
      description:
        "The Ultramarine Sergeant is the epitome of discipline and tactical brilliance, representing the finest of the Adeptus Astartes. As a leader among the Ultramarines, he commands his squad with precision, embodying the values of honor, duty, and courage. Trained on the fortress world of Macragge, the Sergeant excels in battlefield strategy and close-quarters combat. Clad in cerulean blue armor, marked with the insignia of Ultramar, he stands as a symbol of hope and strength in the grim darkness of the far future.",
      image: ultramarine,
    },
  ]

  return (
    <div className="content-box">
      <h1>Characters</h1>
      <div className="characters-wrapper">
        {characters.map((character, index) => (
          <div className="character-wrapper" key={index}>
            <h2>{character.name}</h2>
            <p className="character-description">{character.description}</p>
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <button className="character-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Characters
