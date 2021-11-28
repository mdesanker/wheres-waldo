import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import levelData from "../utils/levels.json";

const Level = (props) => {
  const { id } = useParams();

  // Save level data in state
  const [level, setLevel] = useState({});

  useEffect(() => {
    setLevel(levelData[id - 1]);
  }, []);

  console.log(level);

  // Get relevant image for level selected
  const image = require(`../images/waldo-${id}.jpg`).default;

  // console.log(image);

  const clickHandler = (e) => {
    // Get coordinates of user click
    const userX = e.clientX;
    const userY = e.clientY;
    console.log(`x: ${userX}, y: ${userY}`);

    // Get bounding coordinates of clicked element
    const { left, top, right, bottom } = e.target.getBoundingClientRect();

    const calcX = (userX - left) / (right - left);
    const calcY = (userY - top) / (bottom - top);

    // console.log(left, top, right, bottom);

    console.log([calcX.toFixed(3), calcY.toFixed(3)]);
  };

  return (
    <LevelContainer>
      <Map src={image} onClick={clickHandler} />
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
  justify-content: center;
`;

export default Level;
