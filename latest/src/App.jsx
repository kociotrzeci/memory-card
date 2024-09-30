import "./App.css";
import CardImage from "./CardImage";
import { heroList } from "./heroList";
function App() {
  return (
    <>
      {heroList.map((name) => {
        console.log("i am here");
        return <CardImage _inputString={name} key={name}></CardImage>;
      })}
      <CardImage _inputString={"bruce willis"}></CardImage>
    </>
  );
}

export default App;
