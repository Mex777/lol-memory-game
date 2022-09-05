import Card from "./Card";

export default function CardList(props) {
  return (
    <div className="card-list">
      {props.list.map((card) => {
        return (
          <Card
            key={card.name}
            name={card.name}
            state={card.clicked}
            src={card.src}
            click={(id) => props.click(id)}
          />
        );
      })}
    </div>
  );
}
