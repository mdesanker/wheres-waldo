import styled from "styled-components";
import CharacterIcon from "./CharacterIcon";

const Characters = (props) => {
  const charList = props.chars.map((char) => {
    return (
      <CharacterIcon
        key={char}
        img={require(`../../images/${char}.jpg`).default}
        name={char}
        found={props.found.includes(char) ? true : false}
      />
    );
  });

  return <CharactersContainer>{charList}</CharactersContainer>;
};

const CharactersContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  border-bottom: 1px solid #f1f1f1;
`;

export default Characters;
