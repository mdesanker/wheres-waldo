import styled from "styled-components";
import { useState } from "react";
import CharacterIcon from "./CharacterIcon";

const Characters = (props) => {
  const [isFound, setIsFound] = useState(false);

  const charList = props.chars.map((char) => {
    return (
      <CharacterIcon
        key={char}
        img={require(`../../images/${char}.jpg`).default}
        name={char}
        found={isFound}
      />
    );
  });

  return <CharactersContainer>{charList}</CharactersContainer>;
};

const CharactersContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Characters;
