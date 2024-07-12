// import CSS
import HiddenContent from "./components/hiddenContent/hiddenContent";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [hiddenContent, setHiddenContent] = useState(false);

  const increaseCount = () => {
    setNumber((prevValue) => prevValue + 1);
  };

  const decreaseCount = () => {
    setNumber((prevValue) => prevValue - 1);
  };

  const toggleHiddenContent = () => {
    setHiddenContent(!hiddenContent);
  };

  let showHiddenContent = <HiddenContent />;
  const updateContent = () => {
    if (hiddenContent === true) {
      return showHiddenContent;
    } else {
      return null;
    }
  };

  return (
    <>
      <header>
        <h1>Hello World</h1>
        <p id="text">
          <p>What im about to tell you is top secret....</p>
          <p>are you brave enough to listen?</p>
          <p>if that is the case, press this button:</p>
        </p>
        <div id="buttons">
          <button className="number-button" onClick={increaseCount}>
            Raise the stakes!
          </button>
          <button className="number-button" onClick={decreaseCount}>
            Lower the stakes!
          </button>
          <p>Current count:{number}</p>
          <button id="hiddenContent-button" onClick={toggleHiddenContent}>
            Click me
          </button>
        </div>
      </header>
      <main>
        <div id="hiddenContent-box">{updateContent()}</div>
      </main>
    </>
  );
}

export default App;
