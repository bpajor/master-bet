import BetContext from "./bet-context";
import { useState } from "react";
import Barcelona from "../assets/Barcelona.png";
import Bayern from "../assets/BayernMunich.png";
import Borussia from "../assets/BVB.png";
import Inter from "../assets/inter.png";
import Juventus from "../assets/Juventus.png";
import ManCity from "../assets/ManCity.png";
import ManUnited from "../assets/ManUtd.png";
import OL from "../assets/OL.png";
import PSG from "../assets/PSG.png";
import Real from "../assets/Real.png";

const DUMMY_MATCHES = [
  {
    id: 1,
    host: "MANCHESTER UNITED",
    host_photo: ManUnited,
    host_ofert: 2.25,
    draw: 2,
    guest: "MANCHESTER CITY",
    guest_photo: ManCity,
    guest_ofert: 1.75,
  },
  {
    id: 2,
    host: "FC BARCELONA",
    host_photo: Barcelona,
    host_ofert: 2,
    draw: 1.4,
    guest: "REAL MADRID",
    guest_photo: Real,
    guest_ofert: 1.95,
  },
  {
    id: 3,
    host: "BAYERN MUNICH",
    host_photo: Bayern,
    host_ofert: 1.5,
    draw: 2.1,
    guest: "BORUSSIA DORTMUND",
    guest_photo: Borussia,
    guest_ofert: 2.5,
  },
  {
    id: 4,
    host: "INTER MILAN",
    host_photo: Inter,
    host_ofert: 2.65,
    draw: 1.8,
    guest: "JUVENTUS",
    guest_photo: Juventus,
    guest_ofert: 2.1,
  },
  {
    id: 5,
    host: "PSG",
    host_photo: PSG,
    host_ofert: 1.35,
    draw: 2.25,
    guest: "Olympic Lyon",
    guest_photo: OL,
    guest_ofert: 3,
  },
];

const ofertsInitialPointers = [
  { isChosen: false, ofertChosen: "", amount: 0, expectedWin: 0, id: 1 },
  { isChosen: false, ofertChosen: "", amount: 0, expectedWin: 0, id: 2 },
  { isChosen: false, ofertChosen: "", amount: 0, expectedWin: 0, id: 3 },
  { isChosen: false, ofertChosen: "", amount: 0, expectedWin: 0, id: 4 },
  { isChosen: false, ofertChosen: "", amount: 0, expectedWin: 0, id: 5 },
];

const BetProvider = (props) => {
  const [amount, setAmount] = useState(0);
  const [matchIndex, setMatchIndex] = useState(0);
  const [isOfertChosen, setIsOfertChosen] = useState(false);
  const [ofertChosen, setOfertChosen] = useState(0);
  const [ofertsSubmittedList, setOfertsSubmittedList] = useState(
    ofertsInitialPointers
  );

  const onOfertSubmittedHandler = (id, enteredBetAmount, winAmount) => {
    setOfertsSubmittedList((prevTable) => {
      let tableToReturn = [...prevTable];
      tableToReturn[id].isChosen = true;
      tableToReturn[id].ofertChosen = ofertChosen;
      tableToReturn[id].amount = enteredBetAmount;
      tableToReturn[id].expectedWin = winAmount;
      return tableToReturn;
    });
  };

  const onDeleteBetHandler = (id) => {
    setOfertsSubmittedList((prevTable) => {
      let tableToReturn = [...prevTable];
      tableToReturn[id] = {
        isChosen: false,
        ofertChosen: "",
        amount: 0,
        expectedWin: 0,
      };
      return tableToReturn;
    });
  };

  const onDetailsClickedHandler = (id) => {
    if (id == matchIndex) {
      return;
    }
    setMatchIndex(id);
    setIsOfertChosen(false);
  };

  const onOfertChosedHandler = (id) => {
    setIsOfertChosen(true);
    setOfertChosen(id);
  };

  const onAmountChangeHandler = (value, type) => {
    setAmount((prevAmount) => {
      if (type === "+") {
        return prevAmount + value;
      }
      return prevAmount - value;
    });
  };

  const betContext = {
    amount: amount.toFixed(2),
    onAmountChange: onAmountChangeHandler,
    matches: DUMMY_MATCHES,
    onMatchIndexChange: onDetailsClickedHandler,
    matchIndexToDisplay: matchIndex - 1,
    isOfertChosen: isOfertChosen,
    onOfertChoose: onOfertChosedHandler,
    ofertChosen: ofertChosen,
    ofertSubmittedPointers: ofertsSubmittedList,
    onOfertSubmit: onOfertSubmittedHandler,
    onDeleteBet: onDeleteBetHandler,
  };

  return (
    <BetContext.Provider value={betContext}>
      {props.children}
    </BetContext.Provider>
  );
};

export default BetProvider;
