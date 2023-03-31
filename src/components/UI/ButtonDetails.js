import { useContext} from "react";
import OfertContext from "../../contexts/ofert-context";
import classes from "./ButtonDetails.module.css";
import BetContext from "../../contexts/bet-context";

const ButtonDetails = (props) => {
  const ofertCtx = useContext(OfertContext);
  const { onButtonClicked,} = ofertCtx;
  const betCtx = useContext(BetContext);
  const { onMatchIndexChange,ofertSubmittedPointers} = betCtx;


  const onButtonClickedHandler = () => {
    if((!ofertSubmittedPointers[props.id - 1].isChosen)) {
      onButtonClicked(true);
      onMatchIndexChange(props.id)
    }
  };

  return <button className={`${classes.button}`} onClick={onButtonClickedHandler}>Check offer details</button>;
};

export default ButtonDetails;
