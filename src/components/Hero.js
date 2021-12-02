import styled from "styled-components";
import waldoStamp from "../images/waldo-stamp.jpg";

const Hero = () => {
  return <HeroWrapper>Where's Waldo</HeroWrapper>;
};

const HeroWrapper = styled.header`
  width: 100%;
  height: 70vh;
  min-height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid red;
`;

export default Hero;
