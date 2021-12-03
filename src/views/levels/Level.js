import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Characters from "./Characters";
import Menu from "../../components/Menu";
import database from "../../utils/firebase";
import { collection, where, query, getDocs } from "@firebase/firestore";

const Level = (props) => {
  const { id: name } = useParams();

  const [levelInfo, setLevelInfo] = useState({});
  const [click, setClick] = useState([]);
  const [menuHidden, setMenuHidden] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [found, setFound] = useState([]);

  useEffect(() => {
    const fetchLevel = async () => {
      const levelsRef = collection(database, "levels");
      const q = query(levelsRef, where("name", "==", `level-${name}`));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setLevelInfo(doc.data());
      });
    };

    fetchLevel();
  }, []);

  useEffect(() => {
    if (levelInfo.objectives) {
      setCharacters(Object.keys(levelInfo.objectives));
    }
  }, [levelInfo.objectives]);

  // Get relevant image for level selected
  const image = require(`../../images/waldo-${name}.jpg`).default;

  const clickHandler = (e) => {
    // Get board dimensions at time of click
    const board = document.querySelector("#board");
    const { left, top, width, height } = board.getBoundingClientRect();

    // Fractional coords normalized to top left board
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    // setClick([x, y]);

    if (e.target.tagName.toLowerCase() === "img") {
      setMenuHidden(false);
      setClick([x, y]);
    } else if (e.target.tagName.toLowerCase() === "main") {
      setMenuHidden(true);
    }
  };

  const menuItemClickHandler = (e) => {
    const { name } = e.target;
    // console.log(name);
    setMenuHidden(true);

    if (
      Math.abs(click[0] - levelInfo.objectives[name][0]) < 0.02 &&
      Math.abs(click[1] - levelInfo.objectives[name][1]) < 0.02
    ) {
      setFound((prevState) => {
        return [...prevState, name];
      });
    }
  };

  useEffect(() => {
    // console.log("render");
    if (found.length === characters.length) {
      // Game over logic here
      console.log("game over");
    }
  }, [found]);

  // console.log(click);

  // console.log(found);

  return (
    <LevelWrapper onClick={clickHandler}>
      <Characters chars={characters} found={found} />
      <BoardContainer>
        <Menu
          chars={characters}
          position={click}
          vis={menuHidden}
          onItemClick={menuItemClickHandler}
        />
        <Map src={image} id="board" />
      </BoardContainer>
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
  margin: 1rem auto;
  width: 80%;
  min-width: 500px;
`;

const LevelWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
`;

export default Level;
