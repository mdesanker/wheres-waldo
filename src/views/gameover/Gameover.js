import { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Gameover = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay />, document.querySelector("#overlay"))};
      {ReactDOM.createPortal(<Modal />, document.querySelector("#modal"))};
    </Fragment>
  );
};

const Modal = styled.div`
  position: fixed;
  width: 500px;
  height: 200px;
  background-color: #e5e5e5;
  border: 1px solid black;
  z-index: 100;
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
