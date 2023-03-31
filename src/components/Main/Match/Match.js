import { Fragment, useContext} from "react";
import BetContext from "../../../contexts/bet-context";
import OfertContext from "../../../contexts/ofert-context";
import ButtonDetails from "../../UI/ButtonDetails";
import classes from "./Match.module.css";

const Match = (props) => {
  const ofertContext = useContext(OfertContext);
  const betContext = useContext(BetContext);

  const { onButtonClicked } = ofertContext;
  const { onMatchIndexChange, ofertSubmittedPointers } = betContext;

  const onMatchClickedHandler = () => {
    if (!ofertSubmittedPointers[props.id - 1].isChosen) {
      onButtonClicked(true);
      onMatchIndexChange(props.id);
    }
  };

  return (
    <li
      className={`${classes.match} ${
        ofertSubmittedPointers[props.id - 1].isChosen ? classes["ofert--submited"] : ""
      }`}
    >
      {ofertSubmittedPointers[props.id - 1].isChosen ? (
        <p className={classes.fixed}>Submitted!</p>
      ) : (
        <Fragment>
          <div className={classes.div} onClick={onMatchClickedHandler}>
            <img src={props.host_photo} alt={`${props.host} logo`} />
            <p className={classes.teams}>
              {props.host} - {props.guest}
            </p>
            <img src={props.guest_photo} alt={`${props.guest} logo`} />
          </div>
          <ButtonDetails id={props.id} />
        </Fragment>
      )}
    </li>
  );
};

export default Match;
