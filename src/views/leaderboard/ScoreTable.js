import styled from "styled-components";

const ScoreTable = () => {
  return (
    <TableContainer>
      <TableHeader>
        <p>Name</p>
        <p>Time (s)</p>
      </TableHeader>
    </TableContainer>
  );
};

const TableHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.3rem;
  background-color: #f1f1f1;
  color: rgb(100, 100, 100);
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  // border: 1px solid red;
`;

export default ScoreTable;
