import React from "react";
import SetPassword from "../setpassword/SetPassword";

function Password() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"6%"
      }}
    >
      <SetPassword />
    </div>
  );
}

export default Password;
