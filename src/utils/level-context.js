import React, { useState, useEffect } from "react";
import database from "../utils/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "@firebase/firestore";

const LevelContext = React.createContext({
  levels: [],
});

export const LevelContextProvider = (props) => {
  const [levels, setLevels] = useState([]);

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

  return (
    <LevelContext.Provider value={{ levels: levels }}>
      {props.children}
    </LevelContext.Provider>
  );
};

export default LevelContext;
