import styled from "styled-components";
import CharacterIcon from "./CharacterIcon";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

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

  return (
    <Wrapper>
      <Menu>
        <CharacterContainer>{charList}</CharacterContainer>
        <Link to="/wheres-waldo">
          <Button theme={{ color: "white", background: "red" }}>Home</Button>
        </Link>
      </Menu>
    </Wrapper>
  );
};

const CharacterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Wrapper = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #f1f1f1;
`;

export default Characters;
