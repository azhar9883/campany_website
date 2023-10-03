import './Products.css'
function Products(props) {
  
 

    const buttonsMarkup = props.options.map((link) => (
       
            //  <li key={link.id} className="option-button">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item-url option-button"
          >
            {link.text}
          </a>
        // </li>
       
       
      ));
    return <div className="options-container">{buttonsMarkup}</div>;
}

export default Products;