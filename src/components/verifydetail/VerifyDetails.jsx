import React, { Component } from "react";
import CustomButton from "../asset/buttons/CustomButton";
import phone from "../asset/images/phone.svg";
import NumberInput from "../asset/numberinput/NumberInput";
import "./details.css";
import logo1 from "../asset/images/IIF-logo1.png";
import logo2 from "../asset/images/IIF-logo2.png";
import logo3 from "../asset/images/OneInfinity.png";
export class VerifyDetails extends Component {
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
          <div className="inner-form" style={{ height: "480px" }}>
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
            <span style={{ fontSize: "1.5rem" }}>Verify Details</span>
            <div className="des">
              <p>Enter the OTP sent to +91 9619020333</p>
            </div>
            <p
              style={{
                marginTop: "-0.1rem",
                color: "#C71C8E",
                fontWeight: "700",
                fontSize: "1rem",
              }}
            >
              Change Mobile Number
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "0 1rem",
              }}
            >
              <NumberInput />
              <NumberInput />
              <NumberInput />
              <NumberInput />
            </div>
            <div>
              <div>
                <p>
                  Didn’t receive the OTP?{" "}
                  <span style={{ color: "#C71C8E" }}>RESEND OTP</span>
                </p>
              </div>
              <CustomButton name="Continue" />
            </div>
          </div>
        </div>
        <span className="back">Go Back To Login</span>
      </div>
    );
  }
}

export default VerifyDetails;
