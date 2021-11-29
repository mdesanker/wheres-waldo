import styled from "styled-components";
import LevelCard from "./LevelCard";
import levelData from "../../utils/levels.json";

const LevelsContainer = (props) => {
  const levels = levelData;

  const importAll = (r) => {
    const images = {};
    r.keys().map((item) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  };

  const images = importAll(
    require.context("../../images", false, /\.(png|jpe?g|svg)$/)
  );

  // console.log(images);

  const content = levels.map((level) => {
    // console.log(images[level.image].default);
    return (
      <LevelCard
        key={level.id}
        level={level}
        image={images[level.image].default}
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
