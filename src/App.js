import { useState } from "react";
import CardList from "./Components/CardList";
import logo from "./pics/logo.png";

import {
  khaCard,
  zedCard,
  garenCard,
  ahriCard,
  renektonCard,
  kaisaCard,
  jinxcard,
  yasuoCard,
  shacoCard,
  luluCard,
} from "./index";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [card, setCard] = useState([
    ahriCard,
    garenCard,
    zedCard,
    khaCard,
    renektonCard,
    kaisaCard,
    jinxcard,
    yasuoCard,
    shacoCard,
    luluCard,
  ]);

  const handleChange = (id) => {
    const getInd = (id) => {
      let ind;
      card.forEach((currCard, index) => {
        if (currCard.name === id) {
          ind = index;
          return;
        }
      });

      return ind;
    };

    const tryUpdateMax = (score) => {
      if (score > highScore) setHighScore(score);
    };

    const shuffleCards = () => {
      const shuffle = (array) => {
        let currentIndex = array.length,
          randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }

        return array;
      };

      setCard(shuffle(card));
    };

    const ind = getInd(id);
    if (card[ind].clicked) {
      tryUpdateMax(score);
      setScore(0);
      const cardCopy = card;
      cardCopy.forEach((curr) => (curr.clicked = false));
    } else {
      card[ind].clicked = true;
      setScore(score + 1);
    }

    shuffleCards();
  };

  return (
    <div className="App">
      <div className="score">
        <h1>Current score: {score}</h1>
        <img src={logo} id="logo"></img>
        <h1>High Score: {highScore}</h1>
      </div>
      <CardList list={card} click={handleChange} />
    </div>
  );
}

export default App;
