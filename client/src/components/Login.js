import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { Link } from 'react-router-dom';

const state = {
  credentials: {
    username: '',
    password: ''
  }
}

const Login = (props) => {
  const [creds, setCreds] = useState(state)

  const handleChange = e => {
    console.log(e.target)
    setCreds({
      credentials:{
      ...creds.credentials,
      [e.target.name]: e.target.value 
      }
    })
  }

  const login = e => {
    console.log(creds,creds.credentials,)
    e.preventDefault();
    axiosWithAuth().post ('/api/login', creds.credentials)
    .then(res => {
      console.log(res, )
      localStorage.setItem('token', res.data.payload);
      props.history.push('/protected');
    })
    .catch(err => console.log(err));
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <input 
        type='text'
        name='username'
        placeholder='Username'
        value={creds.username}
        onChange={handleChange}
        />
        <input 
        type='password'
        name='password'
        placeholder='Password'
        value={creds.password}
        onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
