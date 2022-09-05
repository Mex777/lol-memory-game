export default function Card(props) {
  return (
    <div className="card" onClick={() => props.click(props.name)}>
      <div className="pic">Picture</div>
      <div className="title">{props.name}</div>
    </div>
  );
}
