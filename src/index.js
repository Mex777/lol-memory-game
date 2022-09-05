import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ahriPic from "./pics/ahri.png";
import garenPic from "./pics/garen.png";
import zedPic from "./pics/zed.png";
import khaPic from "./pics/kha.png";
import renPic from "./pics/renekton.png";
import kaisaPic from "./pics/kaisa.png";
import jinxPic from "./pics/jinx.png";
import yasuoPic from "./pics/yasuo.png";
import shacoPic from "./pics/shaco.png";
import luluPic from "./pics/lulu.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const ahriCard = { name: "Ahri", clicked: false, src: ahriPic };
const garenCard = { name: "Garen", clicked: false, src: garenPic };
const zedCard = { name: "Zed", clicked: false, src: zedPic };
const khaCard = { name: "Kha'Zix", clicked: false, src: khaPic };
const renektonCard = { name: "Renekton", clicked: false, src: renPic };
const kaisaCard = { name: "Kai'Sa", clicked: false, src: kaisaPic };
const jinxcard = { name: "Jinx", clicked: false, src: jinxPic };
const yasuoCard = { name: "Yasuo", clicked: false, src: yasuoPic };
const shacoCard = { name: "Shaco", clicked: false, src: shacoPic };
const luluCard = { name: "Lulu", clicked: false, src: luluPic };
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {
  khaCard,
  garenCard,
  zedCard,
  ahriCard,
  renektonCard,
  kaisaCard,
  jinxcard,
  yasuoCard,
  shacoCard,
  luluCard,
};
