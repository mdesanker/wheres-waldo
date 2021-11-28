import styled from "styled-components";
import LevelCard from "./LevelCard";

const Home = () => {
  return (
    <Wrapper>
      <HomeContainer>
        <LevelsContainer>
          <LevelCard />
          <LevelCard />
          <LevelCard />
          <LevelCard />
          <LevelCard />
          <LevelCard />
        </LevelsContainer>
      </HomeContainer>
    </Wrapper>
  );
};

const LevelsContainer = styled.div`
  width: 100%;
  // min-height: 70vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  border: 1px solid red;
`;

const HomeContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;

  border: 1px solid red;
`;

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;

  border: 1px solid red;
`;

export default Home;
