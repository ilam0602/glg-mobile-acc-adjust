import React from "react";
import { useSearchParams, Routes, Route } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import RecoverEmail from "./pages/RecoverEmail";

function App() {
  const [searchParams] = useSearchParams();

  const mode = searchParams.get("mode");
  const actionCode = searchParams.get("oobCode");

  return (
    <Routes>
      {mode === "resetPassword" && (
        <Route path="/" element={<ResetPassword actionCode={actionCode} />} />
      )}
      {mode === "verifyEmail" && (
        <Route path="/" element={<VerifyEmail actionCode={actionCode} />} />
      )}
      {mode === "recoverEmail" && (
        <Route path="/" element={<RecoverEmail actionCode={actionCode} />} />
      )}
      <Route path="/" element={<h1>Invalid mode or missing parameters.</h1>} />
    </Routes>
  );
}

export default App;
