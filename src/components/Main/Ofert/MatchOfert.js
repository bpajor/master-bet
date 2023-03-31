import {useContext } from "react";
import BetContext from "../../../contexts/bet-context";
import classes from "./MatchOfert.module.css";
import OfertButtons from "./OfertButtons";

const MatchOfert = (props) => {
  const betCtx = useContext(BetContext);
  const { matchIndexToDisplay, matches } = betCtx;

  return (
    <div className={classes.ofert}>
      <div className={classes.teams}>
        <img
          src={matches[matchIndexToDisplay].host_photo}
          alt={matches[matchIndexToDisplay].host}
          width="150"
          height="100"
        />
        <span>vs</span>
        <img
          src={matches[matchIndexToDisplay].guest_photo}
          alt={matches[matchIndexToDisplay].guest}
          width="150"
          height="100"
        />
      </div>
      <OfertButtons />
      </div>
  );
};

export default MatchOfert;
