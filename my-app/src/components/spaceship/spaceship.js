import classes from "./spaceship.module.css";
import { Data } from "../store/store";
import { useContext } from "react";
export const SpaceShip = () => {
  const data = useContext(Data);
  const position = data.spaceshipPosition;
  return (
    <div
      className={classes.spaceShip}
      style={{ left: position.x + `px`, top: position.y + `px` }}
    >
      <img src={"/images/7911_orig.webp"} className={classes.img} />
    </div>
  );
};
