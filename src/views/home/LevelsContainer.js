import { useState, useEffect } from "react";
import styled from "styled-components";
import LevelCard from "./LevelCard";
import levelData from "../../utils/levels.json";
import database from "../../utils/firebase";
import { collection, query, where, getDocs } from "@firebase/firestore";

const LevelsContainer = (props) => {
  const [levelInfo, setLevelInfo] = useState([]);
  const levels = levelData;

  useEffect(() => {
    const fetchLevel = async () => {
      const levelsRef = collection(database, "levels");
      const querySnapshot = await getDocs(levelsRef);
      querySnapshot.forEach((doc) => {
        setLevelInfo(doc.data());
      });
    };

    fetchLevel();
  }, []);

  console.log(levelInfo);

  const importAll = (r) => {
    const images = {};
    r.keys().map((item) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  };

  const images = importAll(
    require.context("../../images", false, /\.(png|jpe?g|svg)$/)
  );

  // console.log(images);

  const content = levels.map((level) => {
    return (
      <LevelCard
        key={level.id}
        level={level}
        image={images[level.image].default}
      />
    );
  });

  return <LevelsWrapper>{content}</LevelsWrapper>;
};

const LevelsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default LevelsContainer;
