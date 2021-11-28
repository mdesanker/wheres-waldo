import styled from "styled-components";
import { useState, useEffect } from "react";
import LevelCard from "./LevelCard";
import levelData from "../../utils/levels.json";

const LevelsContainer = (props) => {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    setLevels(levelData);
  }, []);

  console.log(levels);

  // console.log(levels[0].img);

  const content = levels.map((level) => {
    return <LevelCard key={level.id} level={level} />;
  });

  return <LevelsWrapper>{content}</LevelsWrapper>;
};

const LevelsWrapper = styled.div`
  width: 100%;
  // min-height: 70vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  border: 1px solid red;
`;

export default LevelsContainer;
