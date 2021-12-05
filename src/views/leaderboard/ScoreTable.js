import styled from "styled-components";
import TableEntry from "./TableEntry";

const ScoreTable = () => {
  return (
    <TableContainer>
      <TableHeader>
        <p>Name</p>
        <p>Time (s)</p>
      </TableHeader>
      <TableEntry />
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
