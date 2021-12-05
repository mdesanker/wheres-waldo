import Footer from "./components/Footer";
import Home from "./views/home/Home";
import GlobalStyle from "./themes/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Level from "./views/levels/Level";
import Gameover from "./views/gameover/Gameover";
import { useContext } from "react";
import LevelContext from "./store/level-context";
import Leaderboard from "./views/leaderboard/Leaderboard";

const RouterSwitch = () => {
  // const [duration, setDuration] = useState(0);

  // const levelDurationHandler = (time) => {
  //   console.log("it took", time, "seconds");
  //   setDuration(time);
  // };

  const ctx = useContext(LevelContext);
  // console.log(ctx);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/wheres-waldo" element={<Home />} />
        <Route path="/wheres-waldo/level/:id" element={<Level />} />
        <Route path="/wheres-waldo/leaderboard" element={<Leaderboard />} />
      </Routes>
      {ctx.isGameOver && <Gameover />}
      <Footer />
    </Router>
  );
};

export default RouterSwitch;
