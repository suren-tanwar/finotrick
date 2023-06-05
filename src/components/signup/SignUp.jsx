import React from "react";
import CustomButton from "../asset/buttons/CustomButton";
import CustomInput from "../asset/inputs/CustomInput";
import "./signup.css";
import logo1 from "../asset/images/IIF-logo1.png";
import logo2 from "../asset/images/IIF-logo2.png";
import logo3 from "../asset/images/OneInfinity.png";

function SignUp() {
  return (
    <div className="outer-form" style={{paddingBottom:10}}>
         <div style={{height:20}}></div>
      <div style={{display:"flex",flexDirection:"column"}}>
      <img style={{  }} src={logo1} alt="" />
      <img style={{  }} src={logo2} alt="" />
      <img style={{  }} src={logo3} alt="" />
</div>
      <div className="inner-form" style={{ height: "490px"}}>
        <span className="title">Request Sign Up</span>
        <div className="des2">
          <p>
            It’s great to know your interested in our platform, we will get back
            to you regarding account activation.
          </p>
          <p>
            Till then please visit our site for the latest news and updates.
          </p>
        </div>
        <CustomInput placeholder="Mobile No" />
        <CustomInput placeholder="Enter Your Password" />
        <CustomInput placeholder="Enter Your Email" />
        <div style={{marginTop:"1rem"}}>
          <CustomButton  name="Continue" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
