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

  color: white;
  background-color: #2a9d8f;

  transition: 200ms all;

  &:hover {
    background-color: #264653;
  }
`;

export default Button;
