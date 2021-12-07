import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  margin: 1rem;

  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.background};
  opacity: 0.5;

  transition: 200ms all;

  &:hover {
    opacity: 1;
  }
`;

export default Button;
