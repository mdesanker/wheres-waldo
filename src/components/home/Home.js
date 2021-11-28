import styled from "styled-components";
import LevelsContainer from "./LevelsContainer";

const Home = () => {
  return (
    <Wrapper>
      <HomeContainer>
        <LevelsContainer />
      </HomeContainer>
    </Wrapper>
  );
};

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
