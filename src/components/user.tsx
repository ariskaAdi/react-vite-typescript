import { useState } from "react";

type authUser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<authUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "jhon",
      email: "jhon@mail",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>log in</button>
      <button onClick={handleLogout}>log out</button>
      <div>{user ? `welcome ${user.name} you are logged in ${user.email}` : "please log in"}</div>
    </div>
  );
};

export default User;

// ? sign means optional type where we can pass null or authUser
