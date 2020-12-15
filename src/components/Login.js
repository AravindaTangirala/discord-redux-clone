import React from "react";
import { auth, provider } from "../firebase";
import "./Login.css";
import { Button } from "@material-ui/core";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <h2>I am the login page</h2>
      <div className="login__logo">
        <img
          src="
https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/1200px-Discord_logo.svg.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
