import styled from "styled-components";
import waldoImg from "../images/waldo-icon.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoImage src={waldoImg} alt="waldo" />
      <Logo>
        <span>Where's</span> Waldo?
      </Logo>
    </HeaderContainer>
  );
};

const LogoImage = styled.img`
  height: 30px;
  width: 30px;
`;

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
  gap: 20px;

  background-color: white;
  border-bottom: 1px solid #e5e5e5;
`;

export default Header;
