import React, { useRef } from 'react'
import { Link, useNavigate} from 'react-router-dom'

function Login() {

    let emailPasswordSpanRef=useRef();

    let emailInputRef=useRef();
    let passwordInputRef=useRef();

    let emailSpanRef=useRef();
    let passwordSpanRef=useRef();

    let createAccountLabelRef=useRef();

    let navigate= useNavigate();

    let onClickLogin = ()=>{
      let email= emailInputRef.current.value;
      let password= passwordInputRef.current.value;
      
      if(email=="" || password=="")
          {
          emailPasswordSpanRef.current.innerHTML= 'Enter Your Email and Password';
          emailPasswordSpanRef.current.style.color="red";
      }
      else if(email=="shreshtachowbin@gmail.com" && password=="Shresht@5")
      {
          navigate("/homePage");
      }
      else
      {
          alert("Invalid Username or Password");
      }
    }


  let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?=.*\d).{8,}$/;

  let passwordRegExValidation = (inputRef,spanRef)=>{

    let result = passwordRegEx.test(inputRef.current.value);

    if(result == false)
    {
      spanRef.current.innerHTML="Password must contain 1 Uppercase, 1 Lowercase, 1 Special character, 1 Number with Minimum of 8 characters";
    }
  }


  let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  let emailRegExValidation = (inputRef,spanRef)=>{

    let result = emailRegEx.test(inputRef.current.value);

    if(result == false)
    {
      spanRef.current.innerHTML="Please enter a valid Email ID"
    }
  }


  return (
    <div className='formsDiv'>  
    <div className='imgDiv'>
      <img src='../images/brn-logo.png' alt='brnLogo'></img>
       </div>

        <div>
            <h1>Sign In</h1>
        </div>

        <span ref={emailPasswordSpanRef}></span>

      <div className='inputsDiv'>
        <input placeholder='Email' type='email' ref={emailInputRef}
        
        onBlur={()=>{
          emailRegExValidation(emailInputRef,emailSpanRef);
        }}

        ></input>
        <span ref={emailSpanRef}></span>
      </div>
      <div className='inputsDiv'> 
        <input placeholder='Password' type='password' ref={passwordInputRef}

        onBlur={()=>{
          passwordRegExValidation(passwordInputRef,passwordSpanRef);
        }}

        ></input>
        <span ref={passwordSpanRef}></span>
      </div>

      <div className='formButtonsDiv submitButton'>
        <button type='button'
        
        onClick={()=>{
          onClickLogin();
        }}

        >LOGIN</button>

        <div>
          <input type='checkbox'></input>
          <label>Remember</label>
        </div>
      <Link to="/forgotPassword">Forgot Password?</Link>
      </div>

      <div style={{
        width:"100%",
        height:"50px",
        // textAlign:"center",
        display:"flex",
        justifyContent:"center",
        fontSize:"1.2rem",
        alignItems:"center",
        backgroundColor:"lightskyblue"
      }}> 
        {/* <Link to='/signUp'>CREATE AN ACCOUNT</Link> */}
        <label ref={createAccountLabelRef} onClick={()=>{
          navigate("/signUp");
        }}>CREATE AN ACCOUNT</label>
      </div>

      <div className='brnLink'>
        <Link to='https://www.brninfotech.com/' target='_blank'>2024 © BRN Infotech Pvt. Ltd.</Link>
      </div>

    </div>
  )
}

export default Login
