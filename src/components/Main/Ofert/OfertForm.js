import { useContext, useEffect, useState } from "react";
import BetContext from "../../../contexts/bet-context";
import classes from "./OfertForm.module.css";
import Input from "../../UI/Input";
import OfertContext from "../../../contexts/ofert-context";

const OfertForm = (props) => {
  const ofertCtx = useContext(OfertContext);
  const betCtx = useContext(BetContext);
  const { onButtonClicked } = ofertCtx;
  const {
    isOfertChosen,
    ofertChosen,
    matchIndexToDisplay,
    matches,
    amount,
    onOfertSubmit,
  } = betCtx;

  const [inputAmount, setInputAmount] = useState(0);
  const [invalidInput, setInvalidInput] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(true);

  useEffect(() => {
    setInputAmount(0);
  }, [matchIndexToDisplay]);

  const onInputChangeHandler = (value) => {
    setInputAmount(value);
  };

  const onInvalidInputChange = () => {
    setInvalidInput(true);
    setButtonEnabled(false);
    setTimeout(() => {
      setInvalidInput(false);
      setButtonEnabled(true);
    }, 1000);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (amount + inputAmount >= 1000000 || amount - inputAmount <= 0) {
      onInvalidInputChange();
      return;
    }
    switch (ofertChosen) {
      case "1":
        onOfertSubmit(
          matchIndexToDisplay,
          inputAmount,
          matches[matchIndexToDisplay].host_ofert * inputAmount
        );
        break;
      case "2":
        onOfertSubmit(
          matchIndexToDisplay,
          inputAmount,
          matches[matchIndexToDisplay].draw * inputAmount
        );
        break;
      case "3":
        onOfertSubmit(
          matchIndexToDisplay,
          inputAmount,
          matches[matchIndexToDisplay].guest_ofert * inputAmount
        );
        break;
    }

    onButtonClicked(false);
  };

  let formContent = <p className={classes["initial-message"]}>Choose ofert!</p>;

  if (isOfertChosen) {
    let ofertToDisplay = null;
    let possibleWin = 0;
    switch (ofertChosen) {
      case "1":
        ofertToDisplay = `${matches[matchIndexToDisplay].host
          .toLowerCase()
          .replace(/(?:^|\s)\S/g, (a) => {
            return a.toUpperCase();
          })} win.`;
        possibleWin = inputAmount * matches[matchIndexToDisplay].host_ofert;
        break;
      case "2":
        ofertToDisplay = `Draw.`;
        possibleWin = inputAmount * matches[matchIndexToDisplay].draw;
        break;
      case "3":
        ofertToDisplay = `${matches[matchIndexToDisplay].guest
          .toLowerCase()
          .replace(/(?:^|\s)\S/g, (a) => {
            return a.toUpperCase();
          })} win.`;
        possibleWin = inputAmount * matches[matchIndexToDisplay].guest_ofert;
    }
    formContent = (
      <form onSubmit={onSubmitHandler}>
        <p className={classes.type}>{`Your type is: ${ofertToDisplay}`}</p>
        <div className={classes["input--container"]}>
          <label className={classes.label}>Type amount to bet: </label>
          <Input onChange={onInputChangeHandler} valid={invalidInput} />
          <button className={classes.button} disabled={!buttonEnabled}>
            Submit
          </button>
        </div>
        <div className={classes["summary--content"]}>
          <p
            className={classes["wallet--cases"]}
          >{`Your wallet: ${amount}$`}</p>
          <p className={classes["wallet--cases"]}>{`Possible win: ${
            isNaN(inputAmount) ? "0.00" : possibleWin.toFixed(2)
          }$`}</p>
        </div>
      </form>
    );
  }

  return <div className={classes["form-container"]}>{formContent}</div>;
};

export default OfertForm;
