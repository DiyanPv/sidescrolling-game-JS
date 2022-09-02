import classes from "./Game.module.css";
import { MainScreen } from "./MainScreen";
import { SpaceShip } from "../../spaceship/spaceship";
export const GameScreen = () => {
  return (
    <MainScreen>
      <SpaceShip/>
    </MainScreen>
  );
};
