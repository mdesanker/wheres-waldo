import React, { useState, useEffect } from "react";
import database from "../utils/firebase";
import { collection, query, getDocs, orderBy } from "@firebase/firestore";

const LevelContext = React.createContext({
  levels: [],
  currentLevel: {},
  isGameOver: false,
  duration: 0,
  cardClickHandler: () => {},
  gameOverHandler: () => {},
  gameResetHandler: () => {},
});

export const LevelContextProvider = (props) => {
  const [levels, setLevels] = useState([]);
  const [currentLevel, setCurrentLevel] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const fetchLevel = async () => {
      const levelsRef = collection(database, "levels");
      const q = query(levelsRef, orderBy("id"));
      const querySnapshot = await getDocs(q);
      let levelsList = [];
      querySnapshot.forEach((doc) => {
        levelsList.push(doc.data());
      });
      // setLevels once list populated
      setLevels(levelsList);
    };

    fetchLevel();
  }, []);

  const cardClickHandler = (e) => {
    const { id } = e.target.closest("div");
    setCurrentLevel(levels.find((level) => level.id.toString() === id));
  };

  const gameOverHandler = (time) => {
    // console.log("game over func");
    setDuration(time);
    setIsGameOver(true);
  };

  const gameResetHandler = () => {
    setDuration(0);
    setIsGameOver(false);
  };

  return (
    <LevelContext.Provider
      value={{
        levels: levels,
        currentLevel: currentLevel,
        isGameOver: isGameOver,
        duration: duration,
        cardClickHandler: cardClickHandler,
        gameOverHandler: gameOverHandler,
        gameResetHandler: gameResetHandler,
      }}
    >
      {props.children}
    </LevelContext.Provider>
  );
};

export default LevelContext;
