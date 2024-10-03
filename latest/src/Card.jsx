import CardImage from "./CardImage";
export default function Card({ _actor }) {
  console.log(_actor);
  return (
    <div className="card">
      <CardImage _inputString={_actor.query}></CardImage>
      <p>{_actor.name}</p>
    </div>
  );
}
