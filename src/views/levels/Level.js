import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "../../components/Button";
import levelData from "../../utils/levels.json";
import { Link } from "react-router-dom";
import Characters from "./Characters";
import Menu from "../../components/Menu";
import { getClickCoords } from "./LevelUtils";

const Level = (props) => {
  // Hooks
  const { id } = useParams();

  const [clickCoords, setClickCoords] = useState([]);
  const [menuPosition, setMenuPosition] = useState([0, 0]);
  const [level, setLevel] = useState({});
  const [hidden, setHidden] = useState(false);
  const [menuIsShowing, setMenusIsShowing] = useState(true);
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

  const showMenu = (coords) => {
    const board = document.querySelector("#board");
    const { left, top, right, bottom } = board.getBoundingClientRect();

    // console.log(left, top, right, bottom);

    if (
      coords[0] >= left &&
      coords[0] <= right + window.scrollX &&
      coords[1] >= top &&
      coords[1] <= bottom + window.scrollY
    ) {
      // console.log("within bounds");
      setHidden(true);
    } else setHidden(false);
  };

  const clickHandler = (e) => {
    const xCoor = e.clientX + window.scrollX;
    const yCoor = e.clientY + window.scrollY;

    const click = [xCoor, yCoor];
    setClickCoords(getClickCoords(click));
    setMenuPosition(click);

    showMenu(click);
  };

  console.log("clicked", clickCoords);

  return (
    <LevelContainer onClick={clickHandler}>
      <Menu chars={characters} position={menuPosition} show={hidden} />
      <Characters chars={characters} />
      <Map src={image} id="board" />

      <Link to="/wheres-waldo">
        <Button>Return Home</Button>
      </Link>
    </LevelContainer>
  );
};

const Map = styled.img`
  width: 80%;
  height: auto;
  min-width: 500px;
`;

const LevelContainer = styled.main`
  padding: 50px 0;
  margin: 0 auto;
  width: 100%;
  // max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Level;
