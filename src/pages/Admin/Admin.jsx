import React from "react";
import classes from "./admin.module.css";
import Card from "../../components/card/Card";

const Admin = ({ email }) => {
  return (
    <div className={classes.page}>
      <p>{email}</p>
      <hr />
      <button className={classes.add_new}>Добавить статью</button>
      <div className={classes.cards}>
        <Card itsAdmin={true}/>
        <Card itsAdmin={true}/>
        <Card itsAdmin={true}/>
        <Card itsAdmin={true}/>
      </div>
    </div>
  );
};

export default Admin;
