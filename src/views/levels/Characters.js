import styled from "styled-components";
import { useEffect, useState } from "react";
import waldo from "../../images/waldo.jpg";
import odlaw from "../../images/odlaw.jpg";
import wizard from "../../images/wizard.jpg";

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (props.chars) {
      setCharacters(Object.entries(props.chars).map((char) => char[0]));
    }
  }, [props.chars]);

  // console.log(characters);

  // console.log(Object.entries(props.chars));

  return <CharactersContainer></CharactersContainer>;
};

const CharactersContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Characters;
