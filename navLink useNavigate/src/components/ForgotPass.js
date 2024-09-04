import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ForgotPass() {

  let navigate=useNavigate();

  let emailSpanRef=useRef();

  let emailInputRef=useRef();

  
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
            <h1>Forgot Password ?</h1>
        </div>

          <div style={{
            width:"90%",
            textAlign:"justify",
            margin:"20px"
          }}>
            <label>Enter your registered e-mail address below to get your password to e-mail.</label>
          </div>


            <span ref={emailSpanRef}></span>


      <div className='inputsDiv'>
        <input placeholder='Email' type='email' ref={emailInputRef}
            
            onChange={()=>{
              emailRegExValidation(emailInputRef,emailSpanRef);
            }}
        
        ></input>
      </div>
      

      <div className='formButtonsDiv'>
        <div className='backButton'>
        <button type='button'
        onClick={()=>{
          navigate("/");
        }}
        >Back</button>
        </div>
        
        <div className='submitButton'>
        <button type='button'
         onClick={()=>{

            let email = emailInputRef.current.value;
          if(email=="shreshtachowbin@gmail.com")
          {
            emailSpanRef.current.innerHTML="Check your mail ID";
            emailSpanRef.current.style.color="green";
          }
          else if(email=="")
            {
            emailSpanRef.current.innerHTML="Please Enter Your Email ID";
            emailSpanRef.current.style.color="red";
          }
          else
          {
            alert("No Such Mail Is Registered.");
          }
          
        }}
        >SUBMIT</button>
      </div>
      </div>
          
      <div className='brnLink'>
        <Link to='https://www.brninfotech.com/' target='_blank'>2024 © BRN Infotech Pvt. Ltd.</Link>
      </div>

        </div>
  )
}

export default ForgotPass
