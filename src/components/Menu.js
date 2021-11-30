import styled from "styled-components";

const Menu = (props) => {
  console.log(props.position);
  return <MenuContainer pos={props.position}></MenuContainer>;
};

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;

  border-radius: 5px;
  border: 1px solid #e5e5e5;
  background-color: #f1f1f1;

  transform: translate(${(props) => `${props.pos[0]}px, ${props.pos[1]}px`});
`;

export default Menu;
