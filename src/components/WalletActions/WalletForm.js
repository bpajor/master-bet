import classes from "./WalletForm.module.css";
import { useState } from "react";
import { useContext } from "react";
import BetContext from "../../contexts/bet-context";
import Input from "../UI/Input";

const WalletForm = (props) => {
  const [invalidInput, setInvalidInput] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [enteredAmount, setEnteredAmount] = useState(1);

  const betCtx = useContext(BetContext);
  const { onAmountChange, amount } = betCtx;

  const onAmountChangeHandler = (value) => {
    setEnteredAmount(value);
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

    if (
      (amount + enteredAmount >= 1000000 && props.type === "+") ||
      (amount - enteredAmount < 0 && props.type === "-")
    ) {
      onInvalidInputChange();
      return;
    }
    onAmountChange(enteredAmount, props.type);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <label className={classes.label}>{`Type amount to ${
        props.type === "+" ? "charge:" : "withdraw:"
      }`}</label>
      <Input
        valueToAdd={props.valueToAdd}
        valid={invalidInput}
        counter={props.counter}
        onChange={onAmountChangeHandler}
      />
      <button className={classes.button} type="submit" disabled={!buttonEnabled}>
        Submit
      </button>
    </form>
  );
};

export default WalletForm;
