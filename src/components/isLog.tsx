import { useState } from "react";

const IsLog = () => {
  const [isLog, setIsLog] = useState(false);
  const handleLogin = () => {
    setIsLog(true);
  };
  const handleLogout = () => {
    setIsLog(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>log in</button>
      <button onClick={handleLogout}>log out</button>
      <div>{isLog ? "you are logged in" : "please log in"}</div>
    </div>
  );
};

export default IsLog;
