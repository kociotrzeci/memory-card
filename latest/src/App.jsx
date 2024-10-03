import "./App.css";
import Card from "./Card";
import { heroList } from "./heroList";
function App() {
  return (
    <>
      <header>memory game</header>
      <div className="gameContainer">
        {heroList.map((actor) => {
          return <Card _actor={actor} key={actor.name}></Card>;
        })}
      </div>
    </>
  );
}

export default App;
