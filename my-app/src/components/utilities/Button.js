import { Link } from "react-router-dom";
import classes from "./Button.module.css";
const Button = () => {
  return (
    <div>
      <Link to={"/gameplay"} className={classes.button}>
        Go to GameScreen
      </Link>
    </div>
  );
};
export default Button;
