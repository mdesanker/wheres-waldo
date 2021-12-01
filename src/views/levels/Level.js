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

  useEffect(() => {
    const fetchLevel = async () => {
      const levelsRef = collection(database, "levels");
      const q = query(levelsRef, where("name", "==", `level-${id}`)); // Query desired level
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    };

    fetchLevel();
  }, []);

  // Get relevant image for level selected
  const image = require(`../../images/waldo-${id}.jpg`).default;

  const clickHandler = (e) => {
    // Get board dimensions at time of click
    const board = document.querySelector("#board");
    const { left, top, width, height } = board.getBoundingClientRect();

    // Fractional coords normalized to top left board
    const xFrac = (e.clientX - left) / width;
    const yFrac = (e.clientY - top) / height;

    setClickCoords(getClickCoords([xFrac, yFrac]));
    setMenuPosition([xFrac, yFrac]);
    setHidden(showMenu([xFrac, yFrac]));
  };

  // console.log("clicked", clickCoords);

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
