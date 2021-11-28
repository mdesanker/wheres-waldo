import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";
import GlobalStyle from "./themes/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Level from "./levels/Level";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Router>
        <Routes>
          <Route path="/wheres-waldo" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </Fragment>
  );
};

export default App;
