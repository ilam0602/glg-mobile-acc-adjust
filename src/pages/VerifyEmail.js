import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { applyActionCode } from "firebase/auth";

const VerifyEmail = ({ actionCode }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        console.log(actionCode);
        await applyActionCode(auth,actionCode);
        setMessage("Email has been verified successfully!");
      } catch (error) {
        setMessage(`Error: ${error.message}`);
      }
    };
    verifyEmail();
  }, [actionCode]);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{message || "Verifying email..."}</p>
    </div>
  );
};

export default VerifyEmail;
