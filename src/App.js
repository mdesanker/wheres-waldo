import { Fragment } from "react";
import Header from "./components/Header";
import GlobalStyle from "./themes/GlobalStyles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
};

export default App;
