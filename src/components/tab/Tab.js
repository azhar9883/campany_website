import React from 'react';

function Tab({ label, active, onClick }) {

    const handleClick = () => {
        onClick(label);
      };

    return ( 
        <>
         <li
      className={`resp-tab-item ${active ? 'resp-tab-active' : ''} `}
      onClick={handleClick}
    >
      {label}
    </li>
        </>
     );
}

export default Tab;