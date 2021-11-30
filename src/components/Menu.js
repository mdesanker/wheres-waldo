import styled from "styled-components";

const Menu = (props) => {
  return <MenuContainer></MenuContainer>;
};

const MenuContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;

  border-radius: 5px;
  border: 1px solid #e5e5e5;
  background-color: #f1f1f1;
`;

export default Menu;
