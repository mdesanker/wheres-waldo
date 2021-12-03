import React, { useState, useEffect } from "react";
import database from "../utils/firebase";
import { collection, query, getDocs, orderBy } from "@firebase/firestore";

const LevelContext = React.createContext({
  levels: [],
  id: "",
  cardClickHandler: () => {},
});

export const LevelContextProvider = (props) => {
  const [levels, setLevels] = useState([]);
  const [id, setId] = useState();

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
    setId(id);
  };

  return (
    <LevelContext.Provider
      value={{ levels: levels, id: id, cardClickHandler: cardClickHandler }}
    >
      {props.children}
    </LevelContext.Provider>
  );
};

export default LevelContext;
