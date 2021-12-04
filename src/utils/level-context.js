import React, { useState, useEffect } from "react";
import database from "../utils/firebase";
import { collection, query, getDocs, orderBy } from "@firebase/firestore";

const LevelContext = React.createContext({
  levels: [],
  currentLevel: {},
  cardClickHandler: () => {},
  isGameOver: false,
});

export const LevelContextProvider = (props) => {
  const [levels, setLevels] = useState([]);
  const [currentLevel, setCurrentLevel] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

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

  const gameOverHandler = () => {
    setIsGameOver(true);
  };

  const gameResetHandler = () => {
    setIsGameOver(false);
  };

  return (
    <LevelContext.Provider
      value={{
        levels: levels,
        currentLevel: currentLevel,
        cardClickHandler: cardClickHandler,
        isGameOver: isGameOver,
      }}
    >
      {props.children}
    </LevelContext.Provider>
  );
};

export default LevelContext;
