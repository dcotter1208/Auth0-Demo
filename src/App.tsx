import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import UserProfile from "./components/UserProfile";
import Callback from "./components/Callback";

function App() {
  const [pathLocation, setPathLocation] = useState<string>();
  let mainComponent: JSX.Element;

  switch (pathLocation) {
    case "":
      mainComponent = <Main />;
      break;
    case "profile":
      mainComponent = <UserProfile />;
      break;
    case "callback":
      mainComponent = <Callback />;
      break;
    default:
      mainComponent = <Main />;
      break;
  }

  const signIn = () => {
    setPathLocation("profile");
  };
  const signOut = () => {
    setPathLocation("");
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signOut}>Sign Out</button>
        <img src={logo} className='App-logo' alt='logo' />
        {mainComponent}
      </header>
    </div>
  );
}

export default App;
