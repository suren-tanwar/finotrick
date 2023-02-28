import React from "react";
import CustomButton from "../asset/buttons/CustomButton";
import CustomInput from "../asset/inputs/CustomInput";
import "./signin.css";
import logo1 from "../asset/images/IIF-logo1.png";
import logo2 from "../asset/images/IIF-logo2.png";
import logo3 from "../asset/images/OneInfinity.png";
function SignIn() {
  return (
    <div className="outer-form">
      <div style={{height:20}}></div>
      <div style={{display:"flex",flexDirection:"column"}}>
      <img style={{  }} src={logo1} alt="" />
      <img style={{  }} src={logo2} alt="" />
      <img style={{  }} src={logo3} alt="" />
</div>
      <div className="inner-form">
        <span className="title">Sign In</span>
        <div className="des">
          <p>
            Please enter your mobile number and password to access your account
          </p>
        </div>
        <CustomInput placeholder="Mobile No" />
        <CustomInput placeholder="Enter Your Password" />
        <div>
          <button className="forgot">Forgot Password ?</button>
          <CustomButton name="Continue" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
