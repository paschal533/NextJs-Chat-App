import React, {useContext} from "react";

import { Context } from "../context";

import { useRouter } from 'next/router';

import axios from 'axios';

export default function Auth() {
  const {
    username,
    password,
    setUsername,
    setPassword
  } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    if (username.length === 0 || password.length === 0) return

    axios.put(
      "https://api.chatengine.io/users/",
      {username: username, secret: password},
      {header: {"Private-key": ""}}
    )
    .then(r => router.push('/chats'))
  };
  return ( 
    <div className="background">
      <div className="auth-container">
          <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
            <div className="auth-title">
              CHAT APP
            </div>
            <div className="input-container">
              <input 
                placeholder="Email"
                className="text-input"
                onChange={e => setUsername(e.target.value)}
              />
            </div>
              <div className="input-container">
              <input 
                type="password"
                placeholder="Password"
                className="text-input"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-button"> Login / Sign Up </button>
          </form>
      </div>
    </div>
  )
}
