import styled from "styled-components";

const TableEntry = (props) => {
  const { name, time } = props.info;

  return (
    <EntryContainer>
      <EntryName>{name}</EntryName>
      <EntryTime>{time}</EntryTime>
    </EntryContainer>
  );
};

const EntryName = styled.p`
  font-size: 1rem;
  color: black;
  text-transform: uppercase;
  padding: 0 6rem;
`;

const EntryTime = styled.p`
  font-size: 1rem;
  color: rgb(120, 120, 120);
  padding: 0 6rem;
`;

const EntryContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
`;

export default TableEntry;
