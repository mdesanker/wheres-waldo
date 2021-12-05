import styled from "styled-components";

const LevelTab = (props) => {
  // console.log(props);

  const image = require(`../../images/${props.level.name}.jpg`).default;

  return (
    <Wrapper active={props.active}>
      <TabImage alt={props.level.title} src={image} />
      <LevelLabel>{props.level.title}</LevelLabel>
    </Wrapper>
  );
};

const LevelLabel = styled.label`
  width: 75%;
  height: 100%;
  padding-left: 1rem;
  display: flex;
  align-items: center;

  font-size: 1.2rem;
`;

const TabImage = styled.img`
  width: 25%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  border: none;
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 350px;
  height: 70px;
  margin: 0.5rem;
  border-radius: 10px;
  display: flex;
  border: 1px solid #e5e5e5;

  background-color: ${(props) => (props.active ? "#e5e5e5" : "transparent")};

  transition: 200ms all;

  &:hover {
    transform: translateY(-3px);
  }
`;

export default LevelTab;
