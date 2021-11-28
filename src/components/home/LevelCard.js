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
  height: 200px;
  background-color: lightgray;
`;

const Label = styled.label`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 250px;
  height: 230px;
  margin: 1rem;

  border: 1px solid red;
`;

export default LevelCard;
