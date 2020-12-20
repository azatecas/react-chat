import React from "react";
import Sidebar from "./Sidebar";

function Dashboard({ id }) {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar id={id} />
    </div>
  );
}

export default Dashboard;
