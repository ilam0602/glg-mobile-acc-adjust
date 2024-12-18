import React, { useState } from "react";
import { confirmPasswordReset } from "firebase/auth";
import {auth} from '../firebase';

const ResetPasswordPage = ({ actionCode }) => {
  const [newPassword, setNewPassword] = useState(""); // State for new password input
  const [statusMessage, setStatusMessage] = useState(""); // State to show success or error messages


  const handlePasswordReset = async (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    try {
      // Use the reset code (action code) and new password to reset the password
      console.log(actionCode);
      console.log(newPassword);
      console.log(auth);
      await confirmPasswordReset(auth, actionCode, newPassword);
      setStatusMessage("Your password has been reset successfully! 🎉");
    } catch (error) {
      // Display the error message returned by Firebase
      setStatusMessage(`Error resetting password: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Reset Your Password</h2>
      <form onSubmit={handlePasswordReset}>
        <input
          type="password"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)} // Update state as user types
          required
        />
        <button type="submit">Confirm Reset</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>} {/* Show success or error message */}
    </div>
  );
};

export default ResetPasswordPage;
