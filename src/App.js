import React from 'react';
import './App.css';
import Team from './Components/team/Team';
import Game from './Components/game/Game';
import Scoreboard from './Components/scoreboard/Scoreboard';

function App() {
  return (
    <div className="App">
      <Game name="Sportsgame" />
      <Team />
      <Scoreboard />
    </div>
  );
}

export default App;
