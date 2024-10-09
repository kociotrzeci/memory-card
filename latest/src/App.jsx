import "./App.css";
import Card from "./Card";
import { heroList } from "./heroList";
import { useState } from "react";
import { End } from "./End";
function App() {
  const [score, scoreUpdate] = useState(0);
  const [playingCards, playingCardsUpdate] = useState(5);
  const [highscore, highscoreUpdate] = useState(0);
  const [gameSet, setGameSet] = useState(shuffleArray(heroList));
  const [visibleArray, updateArray] = useState(gameSet.slice(0, playingCards));
  const [isGameOver, setGameOver] = useState(false);
  function shuffleArray(_array) {
    const arrayCopy = [..._array];
    for (let i = 0; i < arrayCopy.length; i++) {
      const random = i + Math.floor(Math.random() * (arrayCopy.length - i));
      [arrayCopy[i], arrayCopy[random]] = [arrayCopy[random], arrayCopy[i]];
    }
    return arrayCopy;
  }

  function handleClick(_actor) {
    console.log(`${_actor.name} clicked, isGameOver: ${isGameOver}`);
    if (_actor.clicked) {
      console.log("again, you lose");
      setGameOver(true);
    } else {
      scoreUpdate(score + 1);
      if (score == highscore) highscoreUpdate(highscore + 1);
      _actor.clicked = true;
      if (score == 25 - 1) setGameOver(true);
      updateArray(shuffleArray(visibleArray));
      if (score == playingCards - 1) addCards();
      else updateArray(shuffleArray(visibleArray));
    }
  }

  function addCards() {
    console.log("added more cards");
    const addative = gameSet.slice(playingCards, playingCards + 5);
    const array = visibleArray.concat(addative);
    shuffleArray(array);
    updateArray(shuffleArray(array));
    playingCardsUpdate((prev) => prev + 5);
  }
  function reset() {
    scoreUpdate(0);
    const newGameSet = shuffleArray(heroList);
    setGameSet(newGameSet);
    updateArray(newGameSet.slice(0, 5));
    setGameOver(false);
  }

  return (
    <>
      {" "}
      <h5>
        Get points by clicking on an image but don't click on any more than
        once!
      </h5>
      <p>
        score: {score} highscore: {highscore}
      </p>
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
      {isGameOver && <End _resetFunction={reset} _score={score} />}
    </>
  );
}

export default App;
