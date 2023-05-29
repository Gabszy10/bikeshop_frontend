import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
const Options = (props) => {
  const warranty = () => {
    const botMessage = createChatBotMessage(
      "We have Cash on Delivery, Swipe on Delivery (Credit Card) for Metro Manila. And we deliver nationwide "
    );

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const payment = () => {
    const botMessage = createChatBotMessage(`
    Bank Transfer, 
    Gcash, 
    Credit Card (Metrobank, Citibank, BPI, HSBC & Chinabank) 3-24 Months Installment, 
    Home Credit Installment, 
    Billease Installment, 
    `);

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const store = () => {
    const botMessage = createChatBotMessage(
      "Our main branch is located at 39 Lilac st. Marikina, and our other branch is BGC."
    );

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const delivery = () => {
    const botMessage = createChatBotMessage(
      "We have Cash on Delivery, Swipe on Delivery (Credit Card) for Metro Manila. And we deliver nationwide."
    );

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const options = [
    {
      text: "Do you have a physical store?",
      handler: store,
      id: 1,
    },
    {
      text: "Do you accept delivery?",
      handler: delivery,
      id: 2,
    },
    {
      text: "What is your warranty for Electric Bikes & Electric Scooter?",
      handler: warranty,
      id: 3,
    },
    {
      text: "What are your mode of payments in-store? ",
      handler: payment,
      id: 4,
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
