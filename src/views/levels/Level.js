import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Characters from "./Characters";
import Menu from "../../components/Menu";
import LevelContext from "../../store/level-context";

const Level = (props) => {
  const [click, setClick] = useState([]);
  const [menuHidden, setMenuHidden] = useState(true);
  const [found, setFound] = useState([]);
  const [seconds, setSeconds] = useState(1);

  const ctx = useContext(LevelContext);
  // console.log(ctx);

  const image =
    ctx.currentLevel &&
    require(`../../images/${ctx.currentLevel.name}.jpg`).default;

  const characters =
    ctx.currentLevel && Object.keys(ctx.currentLevel.objectives);

  const clickHandler = (e) => {
    // Get board dimensions at time of click
    const board = document.querySelector("#board");
    const { left, top, width, height } = board.getBoundingClientRect();

    // Fractional coords normalized to top left board
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    console.log(x, y);

    if (e.target.id === "board") {
      setMenuHidden(false);
      setClick([x, y]);
    } else if (e.target.id !== "board") {
      setMenuHidden(true);
    }
  };

  const menuItemClickHandler = (e) => {
    const { name } = e.target;
    setMenuHidden(true);

    if (
      Math.abs(click[0] - ctx.currentLevel.objectives[name][0]) < 0.02 &&
      Math.abs(click[1] - ctx.currentLevel.objectives[name][1]) < 0.02
    ) {
      setFound((prevState) => {
        return [...prevState, name];
      });
    }
  };

  useEffect(() => {
    if (found.length && found.length === characters.length) {
      // Game over logic here
      ctx.gameOverHandler(seconds);
    }
  }, [found, characters, seconds]);

  // Timer initialize on page load
  useEffect(() => {
    let timer;
    if (!ctx.isGameOver) {
      timer = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (ctx.isGameOver) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [ctx.isGameOver, seconds]);

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
  padding-bottom: 8rem;
`;

export default Level;
