import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <span>Where's</span> Waldo?
      </Logo>
    </HeaderContainer>
  );
};

const Logo = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  color: red;
  text-transform: uppercase;
  letter-spacing: 0.05rem;

  & span {
    color: blue;
  }
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid red;
`;

export default Header;
