import { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "../../components/Button";

const Gameover = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay />, document.querySelector("#overlay"))}
      {ReactDOM.createPortal(<Modal />, document.querySelector("#modal"))}
    </Fragment>
  );
};

const Modal = () => {
  return (
    <ModalContainer>
      <form>
        <h2>You finished in "X" seconds!</h2>
        <p>Enter username to save score to leaderboard.</p>
        <ModalInput type="text" minLength="3" maxLength="3" id="name" />
        <ButtonContainer>
          <ModalButton theme={{ color: "blue", background: "transparent" }}>
            Cancel
          </ModalButton>
          <ModalButton theme={{ color: "white", background: "blue" }}>
            Submit
          </ModalButton>
        </ButtonContainer>
      </form>
    </ModalContainer>
  );
};

const ModalInput = styled.input`
  font-size: 1rem;
  line-height: 2rem;
  padding-left: 0.5rem;
`;

const ModalButton = styled(Button)`
  padding: 0.7rem 1rem;
  margin: 0.5rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
  background-color: #f1f1f1;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);
  z-index: 100;

  & form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
  }

  & input {
    // font-size: 1rem;
    // line-height: 2rem;
    // padding-left: 0.5rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);

  z-index: 10;
`;

export default Gameover;
