import React, { useState } from "react";
import Login from "./Login";

function App() {
  const [id, setid] = useState();
  return (
    <>
      {id}
      <Login onIdSubmit={setid} />;
    </>
  );
}

export default App;
