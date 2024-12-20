import React, { useState } from "react";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../firebase";
import "./ResetPasswordPage.css"; // Import the CSS file

const ResetPasswordPage = ({ actionCode }) => {
  const [newPassword, setNewPassword] = useState(""); // State for new password input
  const [statusMessage, setStatusMessage] = useState(""); // State to show success or error messages

  const handlePasswordReset = async (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    try {
      // Use the reset code (action code) and new password to reset the password
      await confirmPasswordReset(auth, actionCode, newPassword);
      setStatusMessage("Your password has been reset successfully! 🎉");
    } catch (error) {
      // Display the error message returned by Firebase
      setStatusMessage(`Error resetting password: ${error.message}`);
    }
  };

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
        <h2 className="reset-password-title">Reset Password</h2>
        <p className="reset-password-instructions">
          Your password must be at least 6 characters and should include a
          combination of numbers, letters and special characters (!$@%).
        </p>
        <form onSubmit={handlePasswordReset} className="reset-password-form">
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="password-input"
            required
          />
          <input
            type="password"
            placeholder="Re-type password"
            className="password-input"
            required
          />
          {/* <div className="logout-other-devices">
            <input type="checkbox" id="logoutCheckbox" />
            <label htmlFor="logoutCheckbox">
              Log out of other devices. Choose this if someone else accessed
              your account.
            </label>
          </div> */}
          <button type="submit" className="reset-password-button">
            Confirm Reset
          </button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
