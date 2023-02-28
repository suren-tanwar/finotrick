import React, { Component } from "react";
import CustomButton from "../asset/buttons/CustomButton";
import CustomInput from "../asset/inputs/CustomInput";
import phone from "../asset/images/phone.svg";
import logo1 from "../asset/images/IIF-logo1.png";
import logo2 from "../asset/images/IIF-logo2.png";
import logo3 from "../asset/images/OneInfinity.png";
export class ConfirmMobile extends Component {
  render() {
    return (
      <div>
        <div className="outer-form" style={{ marginBottom: "2rem" }}>
        <div style={{height:10}}></div>
      <div style={{display:"flex",flexDirection:"column"}}>
      <img style={{  }} src={logo1} alt="" />
      <img style={{  }} src={logo2} alt="" />
      <img style={{  }} src={logo3} alt="" />
</div>
          <div className="inner-form" style={{ height:400 }}>
            <h3
              className="title"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(39, 56, 150, 0.12)",
                  borderRadius: "50%",
                  height: "112px",
                  width: "112px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img style={{ width: "45%" }} src={phone} alt="" />
              </div>
            </h3>
            <span style={{ fontSize: "1.5rem" }}>Confirm Your Mobile Number</span>
            <div className="des">
              <p>Please ensure that your mobile number matches the mobile number in your profile.</p>
            </div>
         
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "0 1rem",
              }}
            >
              <CustomInput placeholder="Mobile No" />
            </div>
            <div>
             
              <CustomButton name="Continue" />
            </div>
          </div>
        </div>
        <span className="back">Go Back To Login</span>
      </div>
    );
  }
}

export default ConfirmMobile;