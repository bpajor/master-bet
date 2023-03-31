import classes from "./BetsModal.module.css";
import Modal from "../UI/Modal";
import Section from "../UI/Section";
import BetsList from "./BetsList";
import { useContext } from "react";
import BetContext from "../../contexts/bet-context";
import Button from "../UI/Button";

const BetsModal = (props) => {
  const betCtx = useContext(BetContext);
  const { amount, ofertSubmittedPointers } = betCtx;
  let amountToWin = 0;
  let amountBet = 0;
  let i = 0;

  const onSubmitHandler = (text) => {
    const pointersFiltered = ofertSubmittedPointers.filter((match) => {
      return match.isChosen;
    });

    let listToDB = [];

    for (const item of pointersFiltered) {
      listToDB.push({
        matchId: item.id,
        ofertChosen: item.ofertChosen,
        amount: item.amount,
        expectedWin: item.expectedWin,
      });
    }
    console.log(listToDB);
  };

  let content = "";
  for (let item of ofertSubmittedPointers) {
    if (!isNaN(item.expectedWin)) {
      amountToWin = amountToWin + parseFloat(item.expectedWin);
      amountBet = amountBet + item.amount;
    }
    i += 1;
  }

  if (ofertSubmittedPointers.some((item) => item.isChosen)) {
    content =
      parseFloat(amount) - parseFloat(amountBet) > 0 ? (
        <Button text="Submit" onActionClick={onSubmitHandler} />
      ) : (
        <label class={classes["low--balance"]}>Too low balance!</label>
      );
  }

  return (
    <Modal onBackdropClicked={props.onBackdropClicked}>
      <Section onClosingIconClicked={props.onClosingIconClicked}>
        <BetsList />
      </Section>
      <footer className={classes.footer}>
        <p>{`Your balance: $${parseFloat(amount).toFixed(2)}`}</p>
        {content}
        <p>{`Expected win: $${parseFloat(amountBet).toFixed(
          2
        )} => $${parseFloat(amountToWin).toFixed(2)}`}</p>
      </footer>
    </Modal>
  );
};

export default BetsModal;
