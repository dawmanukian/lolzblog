import React from 'react'
import classes from './login.module.css'

const Login = () => {
  return (
    <form className={classes.form}>
        <input type="email" placeholder='Почта' required/>
        <input type="password" placeholder='Пароль' required/>
        <button>Войти</button>
    </form>
  )
}

export default Login