import CardImage from "./CardImage";
export default function Card({ _actor, _handleClick }) {
  return (
    <div className="card" onClick={_handleClick}>
      <CardImage _inputString={_actor.query}></CardImage>
      <p>{_actor.name}</p>
    </div>
  );
}
