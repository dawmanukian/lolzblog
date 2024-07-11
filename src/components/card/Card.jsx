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
      <div className={classes.card_text}>
        <span className={classes.card_header}>Blog</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam
          earum cum quibusdam dolor doloribus ducimus qui eius iusto placeat
          harum, commodi error sapiente repellat ex dolorum nihil. Amet,
          inventore? Nam unde minima tempora temporibus ullam nostrum facere
          enim possimus laboriosam eveniet aspernatur, necessitatibus ipsum
          saepe fugit dolores libero id obcaecati dicta, illo quibusdam. Nobis
          cupiditate quo porro accusamus veniam!
        </span>
        <div className={classes.footer_card}>
          <div>0 Comments</div>
          <div>3 Likes</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
