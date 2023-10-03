import "./Services.css"
const Services = (props) => {
    const options = [
        {
            text: "Web Application Development",
            handler : () => {},
            id: 1,
        },
        {
            text: "Mobile App Development", handler: () => {}, id: 2
        },
        {
            text: "Custom Software Development", handler: () => {}, id: 2
        },
        {
            text: "CMS Development", handler: () => {}, id: 2
        },
        
        
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
         {option.text}
        </button>
    ));
    return <div className="options-container">{buttonsMarkup}</div>
}

export default Services;