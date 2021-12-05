import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LevelContext from "../../store/level-context";
import LevelTab from "./LevelTab";
import ScoreTable from "./ScoreTable";
import Button from "../../components/Button";

const Leaderboard = () => {
  const levelCtx = useContext(LevelContext);
  console.log(levelCtx);
  const [activeLevelID, setActiveLevelID] = useState(1);

  useEffect(() => {
    if (levelCtx.currentLevel) {
      setActiveLevelID(levelCtx.currentLevel.id);
    }
  }, []);

  const currentLevelInfo = levelCtx.levels.find(
    (level) => level.id === activeLevelID
  );

  // console.log(currentLevelInfo);

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
        <HeaderContainer>
          <h1>Leaderboard</h1>
          <Link to="/wheres-waldo">
            <Button theme={{ color: "white", background: "blue" }}>Home</Button>
          </Link>
        </HeaderContainer>
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

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeaderboardHeader = styled.header`
  width: 100%;
  padding: 0 1rem;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Leaderboard;
