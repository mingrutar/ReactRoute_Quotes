import { NavLink } from "react-router-dom";
import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <NavLink className="btn" to="/add">
        Add a Quote
      </NavLink>
    </div>
  );
};

export default NoQuotesFound;
