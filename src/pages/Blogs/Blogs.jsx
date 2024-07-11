import React from "react";
import classes from "./blogs.module.css";
import Card from "../../components/card/Card";

const Blogs = () => {
  return (
    <div className={classes.page}>
      <h1>Список статей</h1>
      <div className={classes.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={classes.btns}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </div>
  );
};

export default Blogs;
