import { useContext } from "react";
import BetContext from "../../contexts/bet-context";
import classes from "./BetItem.module.css";
import Trash from "../../assets/trash.png";

const BetItem = (props) => {
  const betCtx = useContext(BetContext);
  const { ofertSubmittedPointers, onDeleteBet } = betCtx;

  const onDeleteBetHandler = () => {
    onDeleteBet(props.id - 1);
  };

  const { ofertChosen, amount } = ofertSubmittedPointers[props.id - 1];

  let betInfo = "";
  switch (ofertChosen) {
    case "1":
      betInfo = (
        <p className={classes.info}>{`Your bet is: ${
          props.host
        } WIN $${amount} => $${(amount * props.host_ofert).toFixed(2)}`}</p>
      );
      break;
    case "2":
      betInfo = (
        <p className={classes.info}>{`Your bet is: DRAW  $${amount} => $${(
          amount * props.draw
        ).toFixed(2)}`}</p>
      );
      break;
    case "3":
      betInfo = (
        <p className={classes.info}>{`Your bet is: ${
          props.guest
        } WIN  $${amount} => $${(amount * props.guest_ofert).toFixed(2)}`}</p>
      );
      break;
  }

  return (
    <li className={classes["list--item"]}>
      <div className={classes.teams}>
        <img src={props.host_photo} alt={`${props.host}`}></img>
        <span className={classes.span}>vs</span>
        <img src={props.guest_photo} alt={`${props.guest}`}></img>
      </div>
      {betInfo}
      <figure className={classes.trash} onClick={onDeleteBetHandler}>
        <img src={Trash} alt={"Trash"}></img>
        <figcaption>Delete Bet</figcaption>
      </figure>
    </li>
  );
};

export default BetItem;
