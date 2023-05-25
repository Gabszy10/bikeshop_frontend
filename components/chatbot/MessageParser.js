import React from "react";

const MessageParser = (props) => {
  const parse = (message) => {
    if (message.toLowerCase().includes("hello")) {
      props.actions.handleHello();
    }

    if (message.includes("dog")) {
      props.actions.handleDog();
    }
    console.log(message);
  };

  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
