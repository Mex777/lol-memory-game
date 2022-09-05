export default function Card(props) {
  return (
    <div className="card" onClick={() => props.click(props.name)}>
      <div className="pic">
        <img src={props.src} alt="not loaded"></img>
      </div>
      <div className="title">{props.name}</div>
    </div>
  );
}
