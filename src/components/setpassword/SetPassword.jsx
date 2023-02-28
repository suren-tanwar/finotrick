import React from "react";
import CustomButton from "../asset/buttons/CustomButton";
import CustomInput from "../asset/inputs/CustomInput";
import "./setpassword.css";
import lock from "../asset/images/lock.svg";

function SetPassword() {
  return (
    <div>
      <div className="outer-form" style={{marginBottom:'2rem'}}>
        <div className="inner-form" style={{ height: "580px" }}>
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
              <img style={{ width: "45%" }} src={lock} alt="" />
            </div>
          </h3>
          <h3 style={{ fontSize: "1.5rem" }}>Set Your Password</h3>
          <div className="des">
            <p>
              Please enter your mobile number and password to access your
              account
            </p>
          </div>
          <CustomInput placeholder="Enter Your Password" />
          <CustomInput placeholder="Confirm Your Password" />
          <div>
            <div style={{ padding: "20px" }}>
              <input
                type="checkbox"
                style={{ transform: "scale(1.5)" }}
                name=""
                id="check"
              />{" "}
              <label htmlFor="check">
                I accept the <span className="colored"> Terms Of Use</span>,
                <span className="colored"> Privacy Policy</span> and{" "}
                <span className="colored"> Marketing permissions</span>.
              </label>
            </div>
            <CustomButton name="Continue" />
          </div>
        </div>
      </div>
      <span className="back">
          Go Back To Login
      </span>
    </div>
  );
}

export default SetPassword;
