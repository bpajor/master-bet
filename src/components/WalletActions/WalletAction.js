import Section from "../UI/Section";
import classes from "./WalletAction.module.css";
import Button from "../UI/Button";
import {useState } from "react";
import WalletForm from "./WalletForm";

const WalletAction = (props) => {
  const [inputValueToAdd, setInputValueToAdd] = useState(0);
  const [counter, setCounter] = useState(1);

  const onButtonClickedHandler = (value) => {
    setCounter((prevCounter) => {
      return (prevCounter = prevCounter + 1);
    });
    setInputValueToAdd(parseFloat(value));
  };

  return (
    <Section onClosingIconClicked={props.onClosingIconClicked}>
      <div className={classes.amounts}>
        <Button
          text={`+1`}
          onActionClick={onButtonClickedHandler}
          type="number"
        />
        <Button
          text={`+5`}
          onActionClick={onButtonClickedHandler}
          type="number"
        />
        <Button
          text={`+20`}
          onActionClick={onButtonClickedHandler}
          type="number"
        />
        <Button
          text={`+100`}
          onActionClick={onButtonClickedHandler}
          type="number"
        />
      </div>
      <WalletForm
        valueToAdd={inputValueToAdd}
        counter={counter}
        type={props.type}
      />
    </Section>
  );
};

export default WalletAction;
