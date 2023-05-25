import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./options/Options";

const botName = "Bot Wheels";

const config = {
  botName: "I-Wheels",
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName} How can I help you?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    }
  ],
};

export default config;
