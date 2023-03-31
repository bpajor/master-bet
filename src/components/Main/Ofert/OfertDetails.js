import classes from "./OfertDetails.module.css";
import closing from "../../../assets/closing.png";
import { useContext } from "react";
import OfertContext from "../../../contexts/ofert-context";
import BetContext from "../../../contexts/bet-context";
import MatchOfert from "./MatchOfert";
import OfertButtons from "./OfertButtons";
import OfertForm from "./OfertForm";

const OfertDetails = (props) => {
  const ofertCtx = useContext(OfertContext);

  const { onButtonClicked } = ofertCtx;

  const onClosingOfertIconHandler = () => {
    onButtonClicked(false);
  };

  return (
    <section className={classes.section}>
      <figure className={classes['image-container']}>
        <img
          src={closing}
          alt="close ofert"
          className={classes.img}
          onClick={onClosingOfertIconHandler}
        />
      </figure>
      <div className={classes['whole-container']}>
       <MatchOfert />
       <OfertForm />
      </div>
    </section>
  );
};

export default OfertDetails;
