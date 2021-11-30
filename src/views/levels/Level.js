import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "../../components/Button";
import levelData from "../../utils/levels.json";
import { Link } from "react-router-dom";
import Characters from "./Characters";
import Menu from "../../components/Menu";

const Level = (props) => {
  const { id } = useParams();

  const [level, setLevel] = useState({});
  const [hidden, setHidden] = useState(false);
  const [menuIsShowing, setMenusIsShowing] = useState(true);
  const [characters, setCharacters] = useState([]);

  const [currentClick, setCurrentClick] = useState([]);

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

  const levelClickHandler = (e) => {
    const board = document.querySelector("#board");
    const { left, top, width, height } = board.getBoundingClientRect();

    // Click coords normalized to image top left
    const clickX = e.clientX - left;
    const clickY = e.clientY - top;

    // Convert coords to fraction of img dimensions
    const ratioX = clickX / width;
    const ratioY = clickY / height;

    // Original image dimensions
    const originalX = 1920;
    const originalY = 1080;

    // Convert coords to position on original img
    const adjustX = ratioX * originalX;
    const adjustY = ratioY * originalY;

    console.log(adjustX, adjustY);
  };

  const showMenu = () => {
    setMenusIsShowing(true);
  };

  const hideMenu = () => {
    setMenusIsShowing(false);
  };

  // TODO: write function to check if objectives clicked

  // TODO: write function to render menu at position of click

  // TODO: add menu showing objectives to find

  // console.log("click", currentClick);

  return (
    <LevelContainer onClick={levelClickHandler}>
      <Menu chars={characters} position={currentClick} show={menuIsShowing} />
      <Characters chars={characters} />
      {/* <Map src={image} onClick={clickHandler} id={`map-${level.id}`} /> */}
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
  margin: 50px auto;
  width: 100%;
  // max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Level;
