import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "../../components/Button";
import levelData from "../../utils/levels.json";
import { Link } from "react-router-dom";
import Characters from "./Characters";
import Menu from "../../components/Menu";
import { getClickCoords, showMenu } from "./LevelUtils";

const Level = (props) => {
  // Hooks
  const { id } = useParams();

  const [clickCoords, setClickCoords] = useState([]);
  const [menuPosition, setMenuPosition] = useState([0, 0]);
  const [level, setLevel] = useState({});
  const [hidden, setHidden] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setLevel(levelData[id - 1]);
  }, []);

  // console.log(level);

  useEffect(() => {
    setHidden(level.objectives);
  }, [level]);

  useEffect(() => {
    if (level.objectives) {
      setCharacters(Object.entries(level.objectives).map((char) => char[0]));
    }
  }, [level.objectives]);

  // Get relevant image for level selected
  const image = require(`../../images/waldo-${id}.jpg`).default;

  const clickHandler = (e) => {
    const xCoor = e.clientX;
    const yCoor = e.clientY;

    const board = document.querySelector("#board");
    const { left, top, width, height } = board.getBoundingClientRect();

    const ratio = [
      ((xCoor - left) / width) * 100,
      ((yCoor - top) / height) * 100,
    ];

    console.log(ratio);

    const click = [xCoor, yCoor];
    setClickCoords(getClickCoords(click));
    // setMenuPosition(click);
    setMenuPosition(ratio);

    setHidden(showMenu(click));
  };

  console.log("clicked", clickCoords);

  return (
    <LevelWrapper onClick={clickHandler}>
      <Characters chars={characters} />
      <BoardContainer>
        <Menu chars={characters} position={menuPosition} show={hidden} />
        <Map src={image} id="board" />
      </BoardContainer>

      <Link to="/wheres-waldo">
        <Button>Return Home</Button>
      </Link>
    </LevelWrapper>
  );
};

const Map = styled.img`
  width: 100%;
  height: auto;
  min-width: 500px;
`;

const BoardContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 80%;
  // height: auto;
  min-width: 500px;
`;

const LevelWrapper = styled.main`
  padding: 50px 0;
  // margin: 0 auto;
  width: 100%;
  // max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Level;
