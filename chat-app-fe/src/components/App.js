import React, { useState } from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [id, setid] = useLocalStorage("id");
  return (
    <>
      {id}
      <Login onIdSubmit={setid} />;
    </>
  );
}

export default App;
