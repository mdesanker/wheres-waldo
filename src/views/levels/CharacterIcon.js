import styled from "styled-components";

const CharacterIcon = (props) => {
  // console.log(props.found);

  const capitalize = (str) => {
    const arr = str.toLowerCase().split("");
    return arr[0].toUpperCase() + arr.slice(1).join("");
  };

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
