import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "../../components/Button";
import levelData from "../../utils/levels.json";
import { Link } from "react-router-dom";
import Characters from "./Characters";
import Menu from "../../components/Menu";
import { getClickCoords, showMenu } from "./LevelUtils";
import database from "../../utils/firebase";
import { collection, where, query, getDocs } from "@firebase/firestore";

const Level = (props) => {
  const { id } = useParams();

  const [levelInfo, setLevelInfo] = useState({});
  const [click, setClick] = useState([]);

  const [level, setLevel] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchLevel = async () => {
      const levelsRef = collection(database, "levels");
      const q = query(levelsRef, where("name", "==", `level-${id}`));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setLevelInfo(doc.data());
      });
    };

    fetchLevel();
  }, []);

  useEffect(() => {
    setLevel(levelData[id - 1]);
  }, []);

  useEffect(() => {
    if (levelInfo.objectives) {
      setCharacters(Object.keys(levelInfo.objectives));
    }
  }, [levelInfo.objectives]);

  // Get relevant image for level selected
  const image = require(`../../images/waldo-${id}.jpg`).default;

  const clickHandler = (e) => {
    // Get board dimensions at time of click
    const board = document.querySelector("#board");
    const { left, top, width, height } = board.getBoundingClientRect();

    // Fractional coords normalized to top left board
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setClick([x, y]);
  };

  return (
    <LevelWrapper onClick={clickHandler}>
      <Characters chars={characters} />
      <BoardContainer>
        <Menu chars={characters} position={click} />
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
  /* position relative for menu placement */
  position: relative;
  margin: 0 auto;
  width: 80%;
  min-width: 500px;
`;

const LevelWrapper = styled.main`
  padding: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Level;
