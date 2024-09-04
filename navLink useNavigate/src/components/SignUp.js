import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {

  let navigate= useNavigate();

  let nameSpanRef=useRef();
  let genderSpanRef=useRef();
  let maritalStatusSpanRef= useRef();
  let imgSpanRef=useRef();
  let mobileNoSpanRef=useRef();
  let citySpanRef=useRef();
  let stateSpanRef=useRef();
  let emailSpanRef=useRef();
  let passwordSpanRef=useRef();
  let rePasswordSpanRef=useRef();

  let nameInputRef=useRef();
  let imgInputRef=useRef();
  let mobileNoInputRef=useRef();
  let cityInputRef=useRef();
  let emailInputRef=useRef();
  let passwordInputRef=useRef();
  let rePasswordInputRef=useRef();

  
  let onChangeSpan = (inputRef, spanRef)=>{
    if(inputRef.current.value != "")
      {
        spanRef.current.innerHTML="";
      }
    }
    
    
  let onClickSpan = (inputRef,spanRef)=>{
    if(inputRef.current.value=="")
    {
      spanRef.current.innerHTML= "This field is required";
    }
  }  


      
  let nameRegEx = /^[A-Za-z ]{4,30}$/;

  let nameRegExValidation = (inputRef,spanRef)=>{

    let result= nameRegEx.test(inputRef.current.value);

    if(result == false)
    {
      spanRef.current.innerHTML="Please enter a valid name";
    }
  }
  
  
  let mobileNoRegEx = /^[789]\d{9}$/;
  
  let mobileNoRegExValidation = (inputRef,spanRef)=>{
  
    let result = mobileNoRegEx.test(inputRef.current.value);
  
    if(result == false)
    {
      spanRef.current.innerHTML="Please enter valid Mobile Number";
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
            <h1>Sign Up</h1>
        </div>
        <div>
          <label>Enter your name exactly as per your educational certificates:</label>
        </div>
        <div className='inputsDiv'>
        <input placeholder='Name As Per Certificates' type='text' ref={nameInputRef}

        onChange={()=>{
          onChangeSpan(nameInputRef,nameSpanRef);
          }}

        onBlur={()=>{
          nameRegExValidation(nameInputRef,nameSpanRef);
        }}  

          ></input>
        <span ref={nameSpanRef}></span>
      </div>

      <div className='radioButtonsDiv'>
        <label className='labelHeading'>Gender</label>
        <input type='radio' name='gender'></input>
        <label>Male</label>
        <input type='radio' name='gender'></input>
        <label>Female</label>

        <span ref={genderSpanRef}></span>
      </div>
      <div className='radioButtonsDiv'>
        <label className='labelHeading'>Marital Status</label>
        <input type='radio' name='MS'></input>
        <label>Single</label>
        <input type='radio' name='MS'></input>
        <label>Married</label>

        <span ref={maritalStatusSpanRef}></span>
      </div>

      <div className='inputsDiv'>
        <img src='../images/noImage.png' alt='img' style={{
          borderRadius:"50%",
        }}></img>
        <input type='file' ref={imgInputRef}

        onChange={()=>{
         onChangeSpan(imgInputRef,imgSpanRef);
          }}

          ></input>

        <span ref={imgSpanRef}></span>
      </div>
      <div className='inputsDiv'>
        <input placeholder='Mobile No.' type='number' ref={mobileNoInputRef}

        onChange={()=>{
            onChangeSpan(mobileNoInputRef,mobileNoSpanRef);
            }}

        onBlur={()=>{
          mobileNoRegExValidation(mobileNoInputRef,mobileNoSpanRef);
        }}    

            ></input>
        <span ref={mobileNoSpanRef}></span>
      </div>
      <div className='inputsDiv'>
        <input placeholder='City/Town' type='text' ref={cityInputRef}

        onChange={()=>{
          onChangeSpan(cityInputRef,citySpanRef);
          }}

          ></input>
        <span ref={citySpanRef}></span>
      </div>
      <div className='inputsDiv'>
        <select>
            <option value="">Choose Your State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Delhi">Delhi</option>
            <option value="Puducherry">Puducherry</option>
        </select>
        <span ref={stateSpanRef}></span>
      </div>

      <div>
        <label>Enter your account details below:</label>
      </div>

      <div className='inputsDiv'>
        <input placeholder='Email' type='email' ref={emailInputRef}

        onChange={()=>{
          onChangeSpan(emailInputRef,emailSpanRef);
          }}

        onBlur={()=>{
          emailRegExValidation(emailInputRef,emailSpanRef);
        }}  

          ></input>
        <span ref={emailSpanRef}></span>
      </div>
      <div className='inputsDiv'>
        <input placeholder='Password' type='password' ref={passwordInputRef}
        onChange={()=>{
          if(passwordInputRef.current.value!="")
            if(passwordInputRef.current.value!=rePasswordInputRef.current.value)
              {
                rePasswordSpanRef.current.innerHTML="Please Re-Enter the same password";
              }
            {
              passwordInputRef.current.innerHTML="";
            }
          }}

            onBlur={()=>{
              passwordRegExValidation(passwordInputRef,passwordSpanRef);
            }}

            ></input>
        <span ref={passwordSpanRef}></span>
      </div>
      <div className='inputsDiv'>
        <input placeholder='Re-Enter Your Password' type='password' ref={rePasswordInputRef}

        onChange={()=>{
              onChangeSpan(rePasswordInputRef,rePasswordSpanRef);
          }}
  
        onBlur={()=>{
        if(rePasswordInputRef.current.value!=passwordInputRef.current.value)
        {
          rePasswordSpanRef.current.innerHTML="Please Re-Enter the same password";
         }
        }}

      ></input>
        <span ref={rePasswordSpanRef}></span>
      </div>

      <div className='formButtonsDiv'>
        <input type='checkbox'></input>
        <label>I agree to the <Link to='https://docs.google.com/document/d/1UNc8jOJtjQJttCxogPfFQcXFl6gNm8iuOwiRfbkmXcw/edit' target='_blank'>Terms of Service & Privacy Policy</Link></label>
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
          if(nameInputRef.current.value=="")
          {
            nameSpanRef.current.innerHTML="Please provide your name as per your certificates";
          }

          if(imgInputRef.current.value=="")
          {
            imgSpanRef.current.innerHTML="Please choose your passport size photograph";
          }

          if(mobileNoInputRef.current.value=="")
          {
            mobileNoSpanRef.current.innerHTML="Enter your 10 digit Mobile Number";
          }

          onClickSpan(cityInputRef,citySpanRef);
          onClickSpan(emailInputRef,emailSpanRef);
          onClickSpan(passwordInputRef,passwordSpanRef);
          onClickSpan(rePasswordInputRef,rePasswordSpanRef);
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

export default SignUp
