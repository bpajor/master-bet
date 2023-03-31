import classes from "./MatchesList.module.css";
import Match from "./Match";
import { useContext, useEffect, useState } from "react";
import BetContext from "../../../contexts/bet-context";

const MatchesList = (props) => {
  const { matches } = useContext(BetContext);
  const [displayAnimation, setDisplayAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplayAnimation(false);
    }, 1100);
  }, []);

  const matchesList = (
    <ul className={displayAnimation && classes["ul--animation"]}>
      {matches.map((match) => (
        <Match
          key={match.id}
          id={match.id}
          host={match.host}
          host_photo={match.host_photo}
          guest={match.guest}
          guest_photo={match.guest_photo}
        />
      ))}
    </ul>
  );

  return <div className={classes["whole-container"]}>{matchesList}</div>;
};

export default MatchesList;
