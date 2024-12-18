import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const RecoverEmail = ({ actionCode }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const recoverEmail = async () => {
      try {
        const info = await auth.checkActionCode(actionCode);
        await auth.applyActionCode(actionCode);
        setMessage(`Email has been recovered. Previous email: ${info.data.email}`);
      } catch (error) {
        setMessage(`Error: ${error.message}`);
      }
    };
    recoverEmail();
  }, [actionCode]);

  return (
    <div>
      <h2>Recover Email</h2>
      <p>{message || "Recovering email..."}</p>
    </div>
  );
};

export default RecoverEmail;
