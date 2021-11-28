import styled from "styled-components";
import LevelCard from "./LevelCard";
import Level1Img from "../../images/waldo-1.jpg";
import Level2Img from "../../images/waldo-2.jpg";
import Level3Img from "../../images/waldo-3.jpg";

const LevelsContainer = (props) => {
  const levels = [
    { name: "Level 1", img: Level1Img, id: 1 },
    { name: "Level 2", img: Level2Img, id: 2 },
    { name: "Level 3", img: Level3Img, id: 3 },
  ];

  // console.log(levels[0].img);

  const content = levels.map((level) => {
    return (
      <LevelCard
        key={level.id}
        id={level.id}
        name={level.name}
        img={level.img}
      />
    );
  });

  return <LevelsWrapper>{content}</LevelsWrapper>;
};

const LevelsWrapper = styled.div`
  width: 100%;
  // min-height: 70vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  border: 1px solid red;
`;

export default LevelsContainer;
