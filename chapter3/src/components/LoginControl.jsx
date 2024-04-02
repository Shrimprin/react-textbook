import { useState } from "react";

const LogoutButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>Logout</button>
);

const LoginButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>Login</button>
);

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return isLoggedIn ? (
    <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />
  ) : (
    <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />
  );
}
