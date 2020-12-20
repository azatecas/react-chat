import React, { useState } from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
function App() {
  const [id, setid] = useLocalStorage("id");
  return <>{id ? <Dashboard id={id} /> : <Login onIdSubmit={setid} />}</>;
}

export default App;
