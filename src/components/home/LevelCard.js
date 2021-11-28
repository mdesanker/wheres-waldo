import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LevelCard = (props) => {
  return (
    <CardContainer>
      <NavLink to="/wheres-waldo/level/1">
        <ImageContainer />
        <Label>Placeholder</Label>
      </NavLink>
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

  a {
    text-decoration: none;
    color: black;
  }
`;

export default LevelCard;
