import React from "react";
import classes from "./login.module.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');

  const API_URL = "http://127.0.0.1:5000/api/auth/login";

  const hLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
            email,
            password,
        });

        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
            window.location.href = '/profile';
        }
    } catch (error) {
       alert(error)
    }
  };

  return (
    <form onSubmit={hLogin} className={classes.form}>
      <input
        type="email"
        placeholder="Почта"
        onChange={(evn) => setEmail(evn.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Пароль"
        onChange={(evn) => setPassword(evn.target.value)}
        required
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default Login;
