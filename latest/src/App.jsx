import "./App.css";
import Card from "./Card";
import { heroList } from "./heroList";
import { useState } from "react";
function App() {
  const [gameSet, setGameSet] = useState(shuffleArray(heroList));
  const [visibleArray, updateArray] = useState(gameSet.slice(0, 5));

  function shuffleArray(_array) {
    const arrayCopy = [..._array];
    for (let i = 0; i < arrayCopy.length; i++) {
      const random = i + Math.floor(Math.random() * (arrayCopy.length - i));
      [arrayCopy[i], arrayCopy[random]] = [arrayCopy[random], arrayCopy[i]];
    }
    return arrayCopy;
  }

  function handleClick(_actor) {
    console.log(`${_actor.name} clicked`);
    if (_actor.clicked) {
      console.log("again, you lose");
      reset();
    } else {
      _actor.clicked = true;
      updateArray(shuffleArray(visibleArray));
    }
  }

  function reset() {
    const newGameSet = shuffleArray(heroList);
    setGameSet(newGameSet);
    updateArray(newGameSet.slice(0, 5));
  }

  return (
    <>
      <header>memory game</header>
      <div className="gameContainer">
        {visibleArray.map((actor) => {
          return (
            <Card
              _actor={actor}
              key={actor.name}
              _handleClick={() => handleClick(actor)}
            ></Card>
          );
        })}
      </div>
    </>
  );
}

export default App;
