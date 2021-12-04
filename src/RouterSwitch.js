import Footer from "./components/Footer";
import Home from "./views/home/Home";
import GlobalStyle from "./themes/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Level from "./views/levels/Level";
import Gameover from "./views/gameover/Gameover";
import { useState, useContext } from "react";
import LevelContext from "./utils/level-context";

const RouterSwitch = () => {
  // const [duration, setDuration] = useState(0);

  // const levelDurationHandler = (time) => {
  //   console.log("it took", time, "seconds");
  //   setDuration(time);
  // };

  const ctx = useContext(LevelContext);
  console.log(ctx);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/wheres-waldo" element={<Home />} />
        <Route path="/wheres-waldo/level/:id" element={<Level />} />
      </Routes>
      {ctx.isGameOver && <Gameover />}
      <Footer />
    </Router>
  );
};

export default RouterSwitch;
