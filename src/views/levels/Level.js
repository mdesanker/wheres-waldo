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

  const [currentClick, setCurrentClick] = useState([]);

  useEffect(() => {
    setLevel(levelData[id - 1]);
  }, []);

  // console.log(level);

  useEffect(() => {
    setHidden(level.objectives);
  }, [level]);

  // console.log(hidden);
  // console.log("waldo", hidden.waldo);

  // Get relevant image for level selected
  const image = require(`../../images/waldo-${id}.jpg`).default;

  // // First Gen click handler
  // const clickHandler = (e) => {
  //   // Get coordinates of user click
  // const userX = e.clientX;
  // const userY = e.clientY;

  //   const map = document.querySelector(`#map-${level.id}`);
  //   console.log(map);

  //   // Get bounding coordinates of clicked element
  //   const { left, top, right, bottom } = map.getBoundingClientRect();

  // const calcX = (userX - left) / (right - left);
  // const calcY = (userY - top) / (bottom - top);

  //   // console.log(left, top, right, bottom);

  //   const coords = [
  //     Number.parseFloat(calcX.toFixed(3)),
  //     Number.parseFloat(calcY.toFixed(3)),
  //   ];

  //   setCurrentClick(coords);

  //   // Check if waldo clicked
  //   console.log(
  //     "waldo clicked",
  //     Math.abs(coords[0] - hidden.waldo[0]) < 0.02 &&
  //       Math.abs(coords[1] - hidden.waldo[1]) < 0.02
  //   );

  //   console.log(
  //     "odlaw clicked",
  //     Math.abs(coords[0] - hidden.odlaw[0]) < 0.02 &&
  //       Math.abs(coords[1] - hidden.odlaw[1]) < 0.02
  //   );

  //   console.log(
  //     "wizard clicked",
  //     Math.abs(coords[0] - hidden.wizard[0]) < 0.02 &&
  //       Math.abs(coords[1] - hidden.wizard[1]) < 0.02
  //   );
  // };

  const clickHandler = (e) => {
    const userX = e.clientX;
    const userY = e.clientY;
    console.log("click", [userX, userY]);

    // const coords = [
    //   Number.parseFloat(userX.toFixed(3)),
    //   Number.parseFloat(userY.toFixed(3)),
    // ];

    const map = document.querySelector(`#map-${level.id}`);
    const { left, top, right, bottom } = map.getBoundingClientRect();

    console.log("top", top);
    console.log("left", left);

    // const calcX = (userX - left) / (right - left);
    // const calcY = (userY - top) / (bottom - top);

    const calcX = userX - left;
    const calcY = userY - top;

    const coords = [
      Number.parseFloat(calcX.toFixed(3)),
      Number.parseFloat(calcY.toFixed(3)),
    ];
    console.log(coords);

    setCurrentClick(coords);
  };

  // TODO: write function to check if objectives clicked

  // TODO: write function to render menu at position of click

  // TODO: add menu showing objectives to find

  // console.log("click", currentClick);

  return (
    <LevelContainer>
      <Menu position={currentClick} />
      <Characters chars={level.objectives} />
      <Map src={image} onClick={clickHandler} id={`map-${level.id}`} />

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
