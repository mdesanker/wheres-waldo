import { Fragment } from "react";
import styled from "styled-components";
import Hero from "./Hero";
import LevelsContainer from "./LevelsContainer";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <HomeContainer>
        <LevelTitle>Choose a level</LevelTitle>
        <LevelsContainer />
      </HomeContainer>
    </Fragment>
  );
};

const LevelTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 100;
  padding-bottom: 2rem;
`;

const HomeContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 3rem 0;
  margin: 0 auto;
`;

export default Home;
