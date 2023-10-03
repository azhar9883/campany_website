import React, { useState } from "react";
import data from "../../data";
import { FiCheckSquare } from "react-icons/fi";
import {BiSolidDownArrow, BiSolidUpArrow} from "react-icons/bi";
import "./Accordion.css";
import { color } from "framer-motion";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Accordion({sendDataToAco}) {
  const [isActive, setIsActive] = useState(null);
  const toggleAccordion = (index) => {
    setIsActive((prevIndex) => (prevIndex === index ? null : index));
  };

  const sendData = (data) => {
    // const data = 'Hello from Child';
    sendDataToAco(data);
  };
  return (
    <>
      <div className="accordion-item clearfix hide">
        {data.map((item, index) => (
          <div key={index}>
            <div 
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              <div className={`accordian-title-head  ${isActive === index ? 'accordian-title-head-active' : ''} `} >{item.label}  <span>{isActive ? <BiSolidUpArrow style={isActive ? {color:"#fff"}: {color: "#c1c1c1"}}/> : <BiSolidDownArrow style={isActive ? {color:"#fff"}: {color: "#c1c1c1"}}/>}</span></div>
             
            </div>

            
            {isActive === index && (
              <div key={index} className="accordion-content">
                <div className="resp-tabs-container">
                  <div className="tab-inner">
                    <h3>Job Position Requirments</h3>
                    <p>{item.description}</p>
                    <p>
                      <strong>Skills:</strong>
                    </p>
                    <ul>
                      {item.skills.map((item1, index) => (
                        <li>
                          <FiCheckSquare
                            style={{ color: "#2daed8", marginRight: "6px" }}
                          />
                          {item1.skill}
                        </li>
                      ))}
                    </ul>

                    {item.minExperience ? (
                      <p>
                        <strong>
                          Minimum Experience: {item.minExperience}
                        </strong>
                      </p>
                    ) : (
                      <p style={{ display: "none" }}>
                        Minimum Experience: {item.minExperience}
                      </p>
                    )}

                    {item.requirment.length < 0 ? (
                      <ul>
                        {item.requirment.map((res, index) => (
                          <li key={index}>{res.req}</li>
                        ))}
                      </ul>
                    ) : (
                      <li style={{ display: "none" }}></li>
                    )}

                    <p>
                      <strong>No. of Posts : {item.vacancy}</strong>
                    </p>
                  </div>
                </div>
                <a href="#sec2" class="button2" onClick={() => sendData(item.label)}>Apply Now <span><ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} /></span></a>
              </div>
              
            )}
          </div>

        ))}

      </div>
    </>
  );
}

export default Accordion;
