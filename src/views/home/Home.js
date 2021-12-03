import styled from "styled-components";
import LevelsContainer from "./LevelsContainer";

const Home = () => {
  return (
    <Wrapper>
      <HomeContainer>
        <LevelTitle>Choose a level</LevelTitle>
        <LevelsContainer />
      </HomeContainer>
    </Wrapper>
  );
};

const LevelTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 100;
  padding-bottom: 2rem;
`;

const HomeContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
`;

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: white;
`;

export default Home;
