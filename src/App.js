import './App.css';
import React from 'react';
import Article from "./Article";

import Chickens from "./img/chickenglasses.png";
import Meat from "./img/meatvendor.png";
import Pigs from "./img/pigsfly.png";
import Blanket from "./img/blanket.png";



class App extends React.Component {
  render() {
    return (
      <div className="container">
        
        <h1 className="sectionTitle">Todays stories ...</h1>
        <Article picture={Chickens} pictureAlt="Chickens with Glasses" newsHeadline="Chickens wear glasses" newsStory="Turns out that chickens do need to wear glasses to learn React." />
        <Article picture={Pigs} pictureAlt="Pigs can fly" newsHeadline="Pigs do fly" newsStory="Pigs have started flying in north west England after a 4 week coding course." />
        <Article picture={Meat} pictureAlt="Meat vendors" newsHeadline="Meat Vendors?" newsStory="Should we really buy sausages from vending machines?" />
        <Article picture={Blanket} pictureAlt="Blanket" newsHeadline="Your new favourite band!" newsStory="4 lads from the northwest have created the album of the year" />
      </div>
    );
  }
}

export default App;