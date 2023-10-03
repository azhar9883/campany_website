import React, { useState} from "react";
import Tab from "./Tab";

import { FiCheckSquare } from "react-icons/fi";
import data from "../../data"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function VerticalTabs({ sendDataToParent }) {

  const [activeTab, setActiveTab] = useState("Senior .Net developer");
  
  const sendData = (data) => {
    sendDataToParent(data);
  };

  const handleTabClick = (label) => {
    console.log(label);
    setActiveTab(label);
  };

  const avtivedata = data.find((item) => item.label === activeTab);



  return (

    <div className="vertical-tabs resp-vtabs clearfix show">
      <ul className="tab-container resp-tabs-list">
        {data.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            active={activeTab === tab.label}
            onClick={handleTabClick}
          />
        ))}
      </ul>
      <div className="resp-tabs-container">
        <div className="tab-inner">
          <h3>Job Position Requirments</h3>
          <p>{avtivedata.description}</p>
          <p>
            <strong>Skills:</strong>
          </p>
          <ul>
            {avtivedata.skills.map((item, index) => (
              <li key={index}>
                <FiCheckSquare/>
                {item.skill}
              </li>
            ))}
          </ul>

          {avtivedata.minExperience ? (
            <p><strong>Minimum Experience: {avtivedata.minExperience}</strong></p>
          ) : (
            <p style={{ display: "none" }}>
              Minimum Experience: {avtivedata.minExperience}
            </p>
          )}
      

          {avtivedata.requirment.length < 0 ? (
        <ul>
          {avtivedata.requirment.map((item, index) => (
            <li key={index}>{item.req}</li>
          ))}
        </ul>
      ) : (
        <li  style={{ display: "none" }}></li>
      )}
         
          <p>
            <strong>No. of Posts : {avtivedata.vacancy}</strong>
          </p>
         <div>
         <a href="#sec2" class="button2" onClick={() => sendData(avtivedata.label)}>Apply Now <span><ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} /></span></a>
          </div> 
        
        </div>
      </div>
    </div>
  );
}

export default VerticalTabs;
