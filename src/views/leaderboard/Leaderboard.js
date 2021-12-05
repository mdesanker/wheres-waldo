import { Fragment } from "react";
import styled from "styled-components";
import LevelTab from "./LevelTab";

const Leaderboard = () => {
  return (
    <Fragment>
      <LeaderboardHeader>
        <h1>Leaderboard</h1>
      </LeaderboardHeader>
      <LeaderboardContainer>
        <TabContainer>
          <LevelTab active={false} />
          <LevelTab active={false} />
          <LevelTab active={false} />
          <LevelTab active={false} />
          <LevelTab active={false} />
          <LevelTab active={false} />
        </TabContainer>
      </LeaderboardContainer>
    </Fragment>
  );
};

const TabContainer = styled.div`
  width: 100%;
  height: auto;
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
