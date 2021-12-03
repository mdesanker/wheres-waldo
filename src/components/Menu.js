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
  height: auto;
  padding: 0.2rem;
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
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 4px 0 0 2px;
  z-index: 100;

  display: ${(props) => (props.show ? "none" : "block")};

  background-color: #f1f1f1;
`;

export default Menu;
