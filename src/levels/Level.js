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
      Test
      <Map src={image} />
    </LevelContainer>
  );
};

const Map = styled.img`
  width: 400px;
  height: 400px;
`;

const LevelContainer = styled.main`
  margin: 50px auto;
`;

export default Level;
