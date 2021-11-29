const CharacterIcon = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <label>{props.name}</label>
    </div>
  );
};

export default CharacterIcon;
