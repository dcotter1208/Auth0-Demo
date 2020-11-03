import React, { useState } from "react";

function Main(): JSX.Element {
  const [userName, setUserName] = useState<string>();

  const updateName = (e: any) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <p>{`Hello, my name is ${userName}`}</p>
      <input onChange={updateName}></input>
    </div>
  );
}

export default Main;
