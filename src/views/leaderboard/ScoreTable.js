import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import LevelContext from "../../store/level-context";
import TableEntry from "./TableEntry";

const ScoreTable = (props) => {
  const scores = props.info.scores
    ? props.info.scores
        .sort((a, b) => a.time - b.time)
        .map((score) => {
          return <TableEntry info={score} />;
        })
    : "";

  return (
    <TableContainer>
      <TableHeader>
        <p>Name</p>
        <p>Time (s)</p>
      </TableHeader>
      {scores}
    </TableContainer>
  );
};

const TableHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;
  background-color: #f1f1f1;
  color: rgb(100, 100, 100);

  & p {
    padding: 0 6rem;
  }
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  // border: 1px solid red;
`;

export default ScoreTable;
