import "./Characters.scss"

function Characters() {
  const characters = [
    {
      name: "Character One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet.",
    },
    {
      name: "Character Two",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer.",
    },
    {
      name: "Character Three",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      name: "Character Four",
      description:
        "Maecenas non massa nec felis bibendum scelerisque. Fusce aliquet, nunc eget tempor gravida, est mi gravida.",
    },
  ]

  return (
    <div className="content-box">
      <h1>Characters</h1>
      <div className="characters-wrapper">
        {characters.map((character, index) => (
          <div className="character-wrapper" key={index}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <button className="character-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Characters
