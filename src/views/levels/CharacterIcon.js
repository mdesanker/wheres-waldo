import styled from "styled-components";
import capitalize from "../../utils/Capitalize";

const CharacterIcon = (props) => {
  console.log("props", props);

  return (
    <Wrapper charFound={props.found}>
      <IconImage src={props.img} alt="" />
      <label>{capitalize(props.name)}</label>
    </Wrapper>
  );
};

const IconImage = styled.img`
  height: 40px;
  width: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  opacity: ${(props) => (props.charFound ? "0.3" : "1.0")};
`;

export default CharacterIcon;
