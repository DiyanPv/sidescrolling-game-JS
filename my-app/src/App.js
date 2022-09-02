import classes from "./App.module.css";
import Button from "./components/utilities/Button";
import { GameScreen } from "./components/pages/GamePage/Game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./components/store/ctx";
import { HomePage } from "./components/pages/Home/HomePage";
import React from "react";
function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/gameplay" exact element={<GameScreen />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
