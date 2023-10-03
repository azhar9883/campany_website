
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './options/Options';
import Services from './services/Services';
import Products from './products/Products';
const botName = "Minivet";
const config = {
  botName: "Minivet",
  initialMessages: [
    createChatBotMessage(`Hi, I'm ${botName} Virtual Agent. I can provide more information on our services and products!`), 
    createChatBotMessage(`How can I help you Today ?`, 
    {
      widget: "options",
      delay: 500
    }),
  
    // createChatBotMessage(
    //   "First things first, which airport are you looking for information from?",
    //   {
    //     widget: "airportSelector",
    //     delay: 500,
    //   }
    // )
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
    
    },
    {
      widgetName: 'services',
      widgetFunc: (props) => <Services {...props} />,
    
    },
    {
      widgetName: 'products',
      widgetFunc: (props) => <Products {...props} />,
      props: {
        options: [
          {
            text: "School Management System",
            url:
              "https://schoolnewgen.com/",
            id: 1,
          },
          {
            text: "Event Management system",
            url:
              "https://schoolnewgen.com/",
            id: 2,
          },
          {
            text: "Hospital Managment System",
            url: "https://schoolnewgen.com/",
            id: 3,
          },
        ],
      }
    },
  ]

};

export default config;

