import { useParams } from "react-router";
import styled from "styled-components";

const Level = (props) => {
  const { id } = useParams();
  console.log(id);

  // Get relevant image for level selected
  const image = require(`../images/waldo-${id}.jpg`).default;

  console.log(image);

  return (
    <LevelContainer>
      <Map src={image} />
    </LevelContainer>
  );
};

const Map = styled.img`
  width: 80%;
  height: auto;
  min-width: 500px;
`;

const LevelContainer = styled.main`
  margin: 50px auto;
  width: 100%;
  // max-width: 1200px;
  display: flex;
  justify-content: center;
`;

export default Level;
