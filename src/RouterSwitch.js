import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./views/home/Home";
import GlobalStyle from "./themes/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Level from "./views/levels/Level";
import database from "./utils/firebase";
import {
  collection,
  onSnapshot,
  where,
  orderBy,
  query,
  getDocs,
} from "@firebase/firestore";
import { useEffect } from "react";

const RouterSwitch = () => {
  useEffect(() => {
    const fetchLevels = async () => {
      const levelsRef = collection(database, "levels");
      // const q = query(levelsRef, where("level", "==", true));
      const querySnapshot = await getDocs(levelsRef);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    };

    fetchLevels();
  }, []);

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
