import React from "react";

const OfertContext = React.createContext({
    onButtonClicked: () => {},
    isButtonClicked: false
})

export default OfertContext;