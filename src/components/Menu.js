import { useEffect, useState } from "react";
import styled from "styled-components";
import capitalize from "../utils/Capitalize";

const Menu = (props) => {
  const content = props.chars.map((char) => {
    return (
      <MenuItem key={char} name={char} onClick={props.onItemClick}>
        {capitalize(char)}
      </MenuItem>
    );
  });

  return (
    <MenuContainer pos={props.position} show={props.vis}>
      {content}
    </MenuContainer>
  );
};

const MenuItem = styled.button`
  width: 100px;
  height: 40px;
  background-color: #f1f1f1;
  border: none;
  font-size: 1rem;
  letter-spacing: 0.05rem;

  &:hover {
    background-color: lightgray;
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  left: ${(props) => (props.pos ? `${props.pos[0] * 100}%` : 0)};
  top: ${(props) => (props.pos ? `${props.pos[1] * 100}%` : 0)};
  width: 100px;
  display: flex;
  flex-direction: column;

  display: ${(props) => (props.show ? "none" : "block")};

  border-radius: 5px;
  border: 1px solid #e5e5e5;
  background-color: #f1f1f1;
`;

export default Menu;
