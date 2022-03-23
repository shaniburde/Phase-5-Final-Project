import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button } from "./styles";



function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <div className="login-form">
    <div>
      <h1 className="logo">MissFit</h1>
      <h2 className="tagline">A closet management app.</h2>
      <br/>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p className="account-question">
            Don't have an account?</p> &nbsp;
            <Button className="toggle-login" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button> 
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p className="account-question">
            Already have an account?</p> &nbsp;
            <Button className="toggle-login" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
        </>
      )}
    </div>
    </div>
  );
}


const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;