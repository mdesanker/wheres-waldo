import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LevelCard = (props) => {
  // console.log(props.image);

  return (
    <CardContainer>
      <NavLink to={`/wheres-waldo/level/${props.level.id}`}>
        <ImageContainer src={props.image} alt={`${props.level.name} map`} />
        <Label>{props.level.name}</Label>
      </NavLink>
    </CardContainer>
  );
};

const ImageContainer = styled.img`
  width: 100%;
  height: auto;
`;

const Label = styled.label`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 32%;
  height: auto;
  margin-bottom: 2rem;
  border-radius: 0 0 5px 5px;

  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

export default LevelCard;
