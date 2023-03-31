import {useContext } from "react";
import BetContext from "../../../contexts/bet-context";
import Button from "../../UI/Button";
import classes from "./OfertButtons.module.css";

const OfertButtons = (props) => {
  const betCtx = useContext(BetContext);

  const { matchIndexToDisplay, matches, onOfertChoose} = betCtx;

  const onButtonClicked = (id) => {
     onOfertChoose(id);
  };

  return (
    <div className={classes["ofert-buttons"]}>
      <Button
        text={`Win - ${matches[matchIndexToDisplay].host_ofert}x`}
        id="1"
        onActionClick={onButtonClicked}
      />
      <Button
        text={`Draw - ${matches[matchIndexToDisplay].draw}x`}
        id="2"
        onActionClick={onButtonClicked}
      />
      <Button
        text={`Win - ${matches[matchIndexToDisplay].guest_ofert}x`}
        id="3"
        onActionClick={onButtonClicked}
      />
    </div>
  );
};

export default OfertButtons;
