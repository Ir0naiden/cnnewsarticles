import './App.css';
import React from 'react';
import Article from "./Article";

import chickens from "./img/chickenglasses.png";
import meat from "./img/meatvendor.png";
import pigs from "./img/pigsfly.png";
import blanket from "./img/blanket.png";



class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="sectionTitle"><h1>Todays stories ...</h1></div>
        <div className="article"><Article picture={chickens} newsHeadline="Chickens wear glasses" newsStory="Turns out that chickens do need to wear glasses to learn React." /></div>
        <div className="article"><Article picture={pigs} newsHeadline="Pigs do fly" newsStory="Pigs have started flying in north west England after a 4 week coding course." /></div>
        <div className="article"><Article picture={meat} newsHeadline="Meat Vendors?" newsStory="Should we really buy sausages from vending machines?" /></div>
        <div className="article"><Article picture={blanket} newsHeadline="Your new favourite band!" newsStory="4 lads from the northwest have created the album of the year" /></div>
      </div>
      
    );
  }
}

export default App;