import classes from "./Game.module.css";
export const MainScreen = (props) => {
  return <div className={classes.mainScreen} style={{backgroundImage: `url("/images/tCz0AX4.png")`}}>{props.children}</div>;
};
