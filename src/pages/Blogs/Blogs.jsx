import React from 'react'
import classes from './blogs.module.css'
import Card from '../../components/card/Card'

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
    </div>
  )
}

export default Blogs