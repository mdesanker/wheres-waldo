import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import waldo from "../../images/waldo-1.jpg";

const LevelCard = (props) => {
  console.log(props.level);

  return (
    <CardContainer>
      <NavLink to={`/wheres-waldo/level/${props.level.id}`}>
        <ImageContainer src={props.level.img} alt={`${props.level.name} map`} />
        <Label>{props.level.name}</Label>
      </NavLink>
    </CardContainer>
  );
};

const ImageContainer = styled.img`
  width: 100%;
  height: 200px;
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
