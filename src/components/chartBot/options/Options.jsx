import React from "react";

import "./Options.css"
const Options = (props) => {
    const options = [
        {
            text: "Services",
            handler : props.actionProvider.handleservices,
            id: 1,
        },
        {
            text: "Products", handler: props.actionProvider.handleproducts, id: 2
        },
        
        
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
         {option.text}
        </button>
    ));
    return <div className="options-container">{buttonsMarkup}</div>
}

export default Options;