import { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import LevelContext from "../../store/level-context";
import LevelTab from "./LevelTab";
import ScoreTable from "./ScoreTable";

const Leaderboard = () => {
  const levelCtx = useContext(LevelContext);
  // console.log(levelCtx);

  const [activeLevelID, setActiveLevelID] = useState(1);

  const currentLevelInfo = levelCtx.levels.find(
    (level) => level.id === activeLevelID
  );

  console.log(currentLevelInfo);

  const activeLevelClickHandler = (e) => {
    const { id } = e.target.closest("div");
    setActiveLevelID(Number.parseInt(id));
  };

  const levels = levelCtx.levels.map((level) => {
    return (
      <LevelTab
        key={level.id}
        level={level}
        active={level.id === activeLevelID}
        onTabClick={activeLevelClickHandler}
      />
    );
  });

  return (
    <Fragment>
      <LeaderboardHeader>
        <h1>Leaderboard</h1>
      </LeaderboardHeader>
      <LeaderboardContainer>
        <TabContainer>{levels}</TabContainer>
        <ScoreTable info={currentLevelInfo} levelid={activeLevelID} />
      </LeaderboardContainer>
    </Fragment>
  );
};

const TabContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const LeaderboardContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const LeaderboardHeader = styled.header`
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: center;

  & h1 {
    width: 100%;
    max-width: 1200px;
  }
`;

export default Leaderboard;
