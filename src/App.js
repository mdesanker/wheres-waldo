import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyle from "./themes/GlobalStyles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Footer />
    </Fragment>
  );
};

export default App;
