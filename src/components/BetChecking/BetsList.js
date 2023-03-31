import { useContext } from "react";
import BetContext from "../../contexts/bet-context";
import BetItem from "./BetItem";
import classes from "./BetsList.module.css";

const BetsList = (props) => {
  const betCtx = useContext(BetContext);
  const { matches, ofertSubmittedPointers } = betCtx;

  let content = (
    <div className={classes.noList}>
      <p>No ofert chosen!</p>
    </div>
  );

  if (ofertSubmittedPointers.some((item) => item.isChosen)) {
    content = (
      <div className={classes["list--container"]}>
        <p className={classes["initial--message"]}>Your bets: </p>
        <ul className={classes.list}>
          {matches.map((match, index) => {
            if (ofertSubmittedPointers[index].isChosen) {
              return (
                <BetItem
                  key={match.id}
                  id={match.id}
                  host_photo={match.host_photo}
                  host={match.host}
                  host_ofert={match.host_ofert}
                  guest_photo={match.guest_photo}
                  guest={match.guest}
                  guest_ofert={match.guest_ofert}
                  draw={match.draw}
                />
              );
            }
          })}
        </ul>
      </div>
    );
  }

  return content;
};

export default BetsList;
