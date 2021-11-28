import { useParams } from "react-router";
import styled from "styled-components";

const Level = ({ match }) => {
  console.log(match);
  const { id } = useParams();
  console.log(id);

  return <LevelContainer>Test</LevelContainer>;
};

const LevelContainer = styled.main`
  margin: 50px auto;
`;

export default Level;
