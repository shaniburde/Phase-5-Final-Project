import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button } from "./styles";
import Logo from "./images/MissFit-Final-Logo.png";



function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <div className="login-form">
    <div>
      <img src={Logo} alt="Logo" className="logo" />
      <br/>
      <br/>
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