import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LevelContext from "../../utils/level-context";

const LevelCard = (props) => {
  const ctx = useContext(LevelContext);

  // console.log(props.level);

  const { level } = props;
  // console.log(level);

  // Get relevant image for level selected
  const image = require(`../../images/${level.name}.jpg`).default;

  return (
    <CardContainer id={level.id} onClick={ctx.cardClickHandler}>
      <NavLink to={`/wheres-waldo/level/${level.id}`}>
        <ImageContainer src={image} alt={`${props.level.name} map`} />
        <Label>{level.name}</Label>
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
