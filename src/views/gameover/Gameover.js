import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import LevelContext from "../../store/level-context";
import database from "../../utils/firebase";
import {
  doc,
  updateDoc,
  query,
  getDoc,
  where,
  collection,
  orderBy,
  getDocs,
  arrayUnion,
} from "firebase/firestore";

const Gameover = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay />, document.querySelector("#overlay"))}
      {ReactDOM.createPortal(<Modal />, document.querySelector("#modal"))}
    </Fragment>
  );
};

const Modal = () => {
  const ctx = useContext(LevelContext);

  // console.log(ctx.currentLevel.id);

  useEffect(() => {
    const fetchLevel = async () => {
      const docRef = doc(database, "levels", `${ctx.currentLevel.docID}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Data: ", docSnap.data());
      } else {
        console.log("No such doc");
      }
    };
    // fetchLevel();
  }, []);

  const scoreSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("submitted");
    // console.log(ctx.currentLevel);
    // console.log(ctx.duration);

    const addScore = async () => {
      const levelRef = doc(database, "levels", `${ctx.currentLevel.docID}`);
      await updateDoc(levelRef, {
        scores: arrayUnion({
          name: "AGN",
          time: ctx.duration,
        }),
      });
    };

    addScore();
  };

  return (
    <ModalContainer>
      <form onSubmit={scoreSubmitHandler}>
        <h2>You finished in {ctx.duration} seconds!</h2>
        <p>Enter username to save score to leaderboard.</p>
        <ModalInput type="text" minLength="3" maxLength="3" id="name" />
        <ButtonContainer>
          <Link to="/wheres-waldo">
            <ModalButton
              type="button"
              theme={{ color: "blue", background: "transparent" }}
              onClick={ctx.gameResetHandler}
            >
              Cancel
            </ModalButton>
          </Link>
          {/* <Link to="/wheres-waldo/leaderboard"> */}
          <ModalButton
            type="submit"
            theme={{ color: "white", background: "blue" }}
          >
            Submit
          </ModalButton>
          {/* </Link> */}
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
