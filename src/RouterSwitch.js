import Footer from "./components/Footer";
import Home from "./views/home/Home";
import GlobalStyle from "./themes/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Level from "./views/levels/Level";
import Gameover from "./views/gameover/Gameover";

const RouterSwitch = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/wheres-waldo" element={<Home />} />
        <Route path="/wheres-waldo/level/:id" element={<Level />} />
      </Routes>
      <Gameover />
      <Footer />
    </Router>
  );
};

export default RouterSwitch;
