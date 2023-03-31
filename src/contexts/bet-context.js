import React from "react";

const BetContext = React.createContext({
   amount: 0,
   onAmountChangeHandler: () => {},
   matches: [],
   matchIndexToDisplay: 0,
   isOfertChosen: false,
   ofertChosen: 0,
   ofertSubmittedPointers: [],
   onOfertSubmit: () => {}
})

export default BetContext;