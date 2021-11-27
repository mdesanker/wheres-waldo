import styled from "styled-components";

const LevelCard = (props) => {
  return (
    <CardContainer>
      <ImageContainer />
      <Label>Placeholder</Label>
    </CardContainer>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: lightgray;
`;

const Label = styled.div`
  width: 100%;
  height: 100px;
`;

const CardContainer = styled.div`
  width: 300px;
  height: 400px;
`;

export default LevelCard;
