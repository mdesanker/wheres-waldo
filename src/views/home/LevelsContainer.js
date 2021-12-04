import { useContext } from "react";
import styled from "styled-components";
import LevelCard from "./LevelCard";
import LevelContext from "../../store/level-context";

const LevelsContainer = () => {
  const ctx = useContext(LevelContext);

  const content = ctx.levels.map((level) => {
    return <LevelCard key={level.id} level={level} />;
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
