import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";
import GlobalStyle from "./themes/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Level from "./levels/Level";

const RouterSwitch = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/wheres-waldo" element={<Home />} />
        <Route path="/wheres-waldo/level/:id" element={<Level />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RouterSwitch;
