import classes from "./HomePage.module.css";
import Button from "../../utilities/Button";
export const HomePage = () => {
  return (
    <div className={classes.main}>
      <img
        src="/images/InvadersLogoStartGame.png"
        alt="no img found"
        className={classes.backgroundImg}
      />
      <Button />
    </div>
  );
};
