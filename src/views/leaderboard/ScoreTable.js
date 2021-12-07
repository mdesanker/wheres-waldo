import styled from "styled-components";
import TableEntry from "./TableEntry";
import uniqid from "uniqid";
import { useContext, useEffect, useState } from "react";
import LevelContext from "../../store/level-context";
import database from "../../utils/firebase";
import { doc, getDoc } from "@firebase/firestore";

const ScoreTable = (props) => {
  const ctx = useContext(LevelContext);
  console.log(props.levelid);
  console.log(ctx.levels[0].docID);

  const [currentScores, setCurrentScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const scoreRef = doc(
          database,
          "levels",
          `${ctx.levels[props.levelid - 1].docID}`
        );
        const scoreSnap = await getDoc(scoreRef);
        if (scoreSnap.exists()) {
          setCurrentScores(scoreSnap.data().scores);
        } else {
          console.log("no data");
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchScores();
  }, [props.levelid]);

  const scores = currentScores
    ? currentScores
        .sort((a, b) => a.time - b.time)
        .map((score) => {
          return <TableEntry key={uniqid()} info={score} />;
        })
    : "";

  return (
    <TableContainer>
      <TableHeader>
        <p>Name</p>
        <p>Time (s)</p>
      </TableHeader>
      {scores ? scores : ""}
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
  padding-bottom: 5rem;
`;

export default ScoreTable;
