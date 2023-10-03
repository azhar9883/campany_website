import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hi. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHi = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleservices = () => {
    const botMessage = createChatBotMessage(`Interested in Services ?
    I'm happy to help!`,
    {
      widget: "services",
      delay: 500,
    }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleproducts = () => {
    console.log("hello")
    const botMessage = createChatBotMessage(`Interested in Products ?
    
    I'm happy to help!`,
    {
      widget: "products",
      delay: 500,
    }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleHello, handleservices, handleHi, handleproducts},
        });
      })}
    </div>
  );
};

export default ActionProvider;