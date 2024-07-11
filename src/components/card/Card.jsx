import React from "react";
import classes from "./card.module.css";

const Card = ({ img, text, header }) => {
  return (
    <div className={classes.card}>
      <img
        className={classes.card_img}
        src="https://st2.depositphotos.com/4107269/7704/i/450/depositphotos_77040729-stock-photo-vacation-entertainment-concept.jpg"
        alt="card_img"
        loading="lazy"
      />
    </div>
  );
};

export default Card;
