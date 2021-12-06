import React from "react";

const LevelContext = React.createContext({
  levels: [],
  currentLevel: {},
  isGameOver: false,
  duration: 0,
  cardClickHandler: () => {},
  gameOverHandler: () => {},
  gameResetHandler: () => {},
  submitScoreHandler: () => {},
});

export default LevelContext;
