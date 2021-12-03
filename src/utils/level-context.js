import React, { useState, useEffect } from "react";
import database from "../utils/firebase";
import { collection, query, where, getDocs } from "@firebase/firestore";

const LevelContext = React.createContext({
  levels: [],
});

export const LevelContextProvider = (props) => {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const fetchLevel = async () => {
      const levelsRef = collection(database, "levels");
      const querySnapshot = await getDocs(levelsRef);
      querySnapshot.forEach((doc) => {
        setLevels(doc.data());
      });
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
