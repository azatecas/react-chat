import React from "react";
import { useConversations } from "../contexts/ConversationProvider";
import OpenConversation from "./OpenConversation";
import Sidebar from "./Sidebar";

function Dashboard({ id }) {
  const { selectedConversation } = useConversations();
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}

export default Dashboard;
