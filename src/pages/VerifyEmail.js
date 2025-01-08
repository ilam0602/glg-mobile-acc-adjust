import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { applyActionCode } from "firebase/auth";
import "./VerifyEmail.css"; // Reuse the CSS file for consistency

const VerifyEmail = ({ actionCode }) => {
  const [statusMessage, setStatusMessage] = useState(""); // State to show success or error messages

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        console.log(actionCode);
        await applyActionCode(auth, actionCode);
        setStatusMessage("Your email has been verified successfully! ✅");
      } catch (error) {
        setStatusMessage(`Error verifying email: ${error.message}`);
      }
    };
    verifyEmail();
  }, [actionCode]);

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        <div className="logo-container">
          <img
            src="/guardianLogo.png" // Update the path to your logo
            alt="Logo"
            className="logo"
          />
        </div>
        <div>
          <img
            src="/checkmark_circle.png" // Replace with the path to your checkmark asset
            alt="Success Checkmark"
            className="checkmark-image"
          />
          </div>
        <h2 className="reset-password-title">Email Verification</h2>
        <p className="reset-password-instructions">
          We are verifying your email address. This process may take a few moments.
        </p>
        <div className="status-section">
          <p className="status-message">{statusMessage || "Verifying email..."}</p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;