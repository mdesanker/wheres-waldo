import React, { useState, useEffect } from "react";
import database from "../utils/firebase";
import { collection, query, getDocs, orderBy } from "@firebase/firestore";
import LevelContext from "./level-context";

export const LevelContextProvider = (props) => {
  const [levels, setLevels] = useState([]);
  const [currentLevel, setCurrentLevel] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const fetchLevel = async () => {
      try {
        const levelsRef = collection(database, "levels");
        const q = query(levelsRef, orderBy("id"));
        const querySnapshot = await getDocs(q);
        let levelsList = [];
        querySnapshot.forEach((doc) => {
          levelsList.push({ ...doc.data(), docID: doc.id });
        });
        // Wait for levelsList to fill to set state
        setLevels(levelsList);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchLevel();
  }, []);

  const cardClickHandler = (e) => {
    const { id } = e.target.closest("div");
    setCurrentLevel(levels.find((level) => level.id.toString() === id));
  };

  const gameOverHandler = (time) => {
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

export default LevelContextProvider;
