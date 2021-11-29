import styled from "styled-components";
import { useEffect, useState } from "react";
import CharacterIcon from "./CharacterIcon";

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    if (props.chars) {
      setCharacters(Object.entries(props.chars).map((char) => char[0]));
    }
  }, [props.chars]);

  const charList = characters.map((char) => {
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
