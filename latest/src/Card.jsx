import CardImage from "./CardImage";
export default function Card({ _actor, _handleClick }) {
  console.log(_actor.name + _actor.clicked);
  return (
    <div className="card" onClick={_handleClick}>
      <CardImage _inputString={_actor.query}></CardImage>
      <p>{_actor.name}</p>
      <p>{_actor.clicked}</p>
    </div>
  );
}
