import styled from "styled-components";
import waldoStamp from "../../images/waldo-stamp.jpg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <HeroWrapper>
      <Logo>
        <img src={waldoStamp} alt="waldo-stamp" />
        <TitleWrapper>
          <Title>
            <h1>Where's</h1>
            <h1>Waldo?</h1>
          </Title>
          <Link to="/wheres-waldo/leaderboard">
            <Button theme={{ color: "white", background: "gray" }}>
              Leaderboard
            </Button>
          </Link>
        </TitleWrapper>
      </Logo>
    </HeroWrapper>
  );
};

const Title = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: blue;

  & h1:nth-child(2) {
    color: red;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Logo = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-evenly;
`;

const HeroWrapper = styled.header`
  width: 100%;
  height: 70vh;
  min-height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #e5e5e5;
`;

export default Hero;
