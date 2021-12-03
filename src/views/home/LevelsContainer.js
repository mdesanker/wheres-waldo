import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import LevelCard from "./LevelCard";
import levelData from "../../utils/levels.json";
import database from "../../utils/firebase";
import { collection, query, where, getDocs } from "@firebase/firestore";
import LevelContext from "../../utils/level-context";

const LevelsContainer = (props) => {
  const levels = levelData;

  const ctx = useContext(LevelContext);
  console.log(ctx.levels);

  // Rewrite
  // const importAll = (r) => {
  //   const images = {};
  //   r.keys().map((item) => {
  //     return (images[item.replace("./", "")] = r(item));
  //   });
  //   return images;
  // };

  // const images = importAll(
  //   require.context("../../images", false, /\.(png|jpe?g|svg)$/)
  // );

  // console.log(images);

  // const content = levels.map((level) => {
  //   return (
  //     <LevelCard
  //       key={level.id}
  //       level={level}
  //       image={images[level.image].default}
  //     />
  //   );
  // });

  const content = ctx.levels.map((level) => {
    return <LevelCard key={level.id} level={level} />;
  });

  return <LevelsWrapper>{content}</LevelsWrapper>;
};

const LevelsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default LevelsContainer;
