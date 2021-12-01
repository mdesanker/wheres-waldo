import styled from "styled-components";
import capitalize from "../utils/Capitalize";

const Menu = (props) => {
  // console.log(props.chars);

  const content = props.chars.map((char) => {
    return <MenuItem>{capitalize(char)}</MenuItem>;
  });

  return (
    <MenuContainer pos={props.position} vis={props.show}>
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
  position: fixed;
  left: ${(props) => (props.pos ? `${props.pos[0]}px` : 0)};
  top: ${(props) => (props.pos ? `${props.pos[1]}px` : 0)};
  width: 100px;
  display: flex;
  flex-direction: column;
  margin: 0;

  display: ${(props) => (props.vis ? "none" : "block")};

  border-radius: 5px;
  border: 1px solid #e5e5e5;
  background-color: #f1f1f1;

  // transform: translate(${(props) => `${props.pos[0]}px, ${props.pos[1]}px`});
`;

export default Menu;
