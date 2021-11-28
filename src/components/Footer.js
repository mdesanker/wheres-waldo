import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright © 2021 mdesanker</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  // border: 1px solid red;
`;

export default Footer;
