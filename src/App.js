import "./App.css";
import React from "react";
import Article from "./Article";

import Chickens from "./img/chickenglasses.png";
import Pigs from "./img/pigsfly.png";
import Meat from "./img/meatvendor.png";
import Blanket from "./img/blanket.png";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Todays top stories ...</h1>
        <Article
          picture={Chickens}
          pictureAlt="Chickens with Glasses"
          headline="Chickens wear glasses"
          story="Turns out that chickens do need to wear glasses to learn React."
        />
        <Article
          picture={Pigs}
          pictureAlt="Pigs can fly"
          headline="Pigs do fly"
          story="Pigs have started flying in north west England after a 4 week coding course."
        />
        <Article
          picture={Meat}
          pictureAlt="Meat vendors"
          headline="Meat Vendors?"
          story="Should we really be buying sausages from vending machines?"
        />
        <Article
          picture={Blanket}
          pictureAlt="Blanket"
          headline="Your new favourite band!"
          story="Have these four lads from the northwest created the album of the year?"
        />
      </div>
    );
  }
}

export default App;
