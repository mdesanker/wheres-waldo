import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "../../components/Button";
import levelData from "../../utils/levels.json";
import { Link } from "react-router-dom";
import Characters from "./Characters";

const Level = (props) => {
  const { id } = useParams();

  const [level, setLevel] = useState({});
  const [hidden, setHidden] = useState({});

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

  // Get coordinates of waldo objective
  // const { waldo } = level.objectives;
  // console.log(waldo);

  // console.log(image);

  const clickHandler = (e) => {
    // Get coordinates of user click
    const userX = e.clientX;
    const userY = e.clientY;

    // Get bounding coordinates of clicked element
    const { left, top, right, bottom } = e.target.getBoundingClientRect();

    const calcX = (userX - left) / (right - left);
    const calcY = (userY - top) / (bottom - top);

    // console.log(left, top, right, bottom);

    const coords = [
      Number.parseFloat(calcX.toFixed(3)),
      Number.parseFloat(calcY.toFixed(3)),
    ];

    setCurrentClick(coords);

    // Check if waldo clicked
    console.log(
      "waldo clicked",
      Math.abs(coords[0] - hidden.waldo[0]) < 0.02 &&
        Math.abs(coords[1] - hidden.waldo[1]) < 0.02
    );

    console.log(
      "odlaw clicked",
      Math.abs(coords[0] - hidden.odlaw[0]) < 0.02 &&
        Math.abs(coords[1] - hidden.odlaw[1]) < 0.02
    );

    console.log(
      "wizard clicked",
      Math.abs(coords[0] - hidden.wizard[0]) < 0.02 &&
        Math.abs(coords[1] - hidden.wizard[1]) < 0.02
    );
  };

  // TODO: write function to check if objectives clicked

  // TODO: write function to render menu at position of click

  // TODO: add menu showing objectives to find

  console.log("click", currentClick);

  return (
    <LevelContainer>
      <Characters chars={level.objectives} />
      <Map src={image} onClick={clickHandler} />

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
