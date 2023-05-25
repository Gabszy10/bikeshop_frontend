import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
const Options = (props) => {
  const handleHowToOder = () => {
    const botMessage = createChatBotMessage("Hello you can order on our website here at https://example.com.");

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const store = () => {
    const botMessage = createChatBotMessage("Our store is located at Lilac St, Marikina, 1800 Metro Manila, Philippines.");

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const sale = () => {
    const botMessage = createChatBotMessage("You can check our sale items at https://sales.com");

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const options = [
    {
      text: "How to order?",
      handler: handleHowToOder,
      id: 1,
    },
    {
      text: "Where’s your store?",
      handler: store,
      id: 2,
    },
    {
      text: "What’s the best deal you can give me?",
      handler: sale,
      id: 3,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
