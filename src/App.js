import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";
import GlobalStyle from "./themes/GlobalStyles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
};

export default App;
