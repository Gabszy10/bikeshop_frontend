import React from "react";
import Chatbot from "react-chatbot-kit";
import logo from "../../images/logos/logo.png";

import config from "../../components/chatbot/config";
import MessageParser from "../../components/chatbot/MessageParser";
import ActionProvider from "../../components/chatbot/ActionProvider";
import { useState } from "react";

function BotChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen ? (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      ) : null}
      <div>
        <img
          onClick={() => setIsOpen(!isOpen)}
          height={100}
          src={
            "https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle.png"
          }
          className="thumbnail"
        />
      </div>
    </div>
  );
}

export default BotChat;
