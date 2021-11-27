import styled from "styled-components";

const Header = () => {
  return <HeaderContainer></HeaderContainer>;
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  border: 1px solid red;
`;

export default Header;
