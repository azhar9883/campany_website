import React, { useState } from 'react'
import data from '../../data';
import { FiCheckSquare } from "react-icons/fi";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {IoMdClose } from 'react-icons/io';
function Cards() {

    const [activeTab, setActiveTab] = useState(1);
    const [modelOpen, SetModelOpen] = useState(false);

    const handleTabClick = (id) => {
        setActiveTab(id);
        SetModelOpen(true);
    };

    const handleClose = () => {
        SetModelOpen(false);
    }
    const avtivedata = data.find((item) => item.id === activeTab);
    console.log(avtivedata);
    return (
        <>
            <div class="row same-gap">
                <div class="col-md-12">
                    <div id="horizontalTab" class="clearfix">
                        <ul class="resp-tabs-list">
                            {data.map((item, index) => (
                                <li key={item.id} onClick={() => handleTabClick(item.id)}><p><img src={item.images} title="no img" width="28" height="28" /> {item.label} </p><span>{item.vacancy} positions available</span></li>
                            ))}


                        </ul>
                        <div class={modelOpen ? 'resp-tabs-container-active' : 'resp-tabs-container'}>
                            <span class="close-tab" onClick={handleClose}>Close <IoMdClose/></span>



                            <div class="tab-inner">
                                <h3>Job Position Requirments</h3>
                                <p>{avtivedata.description}</p>
									<p><strong>Skills:</strong></p>
                                <ul>
                                    {avtivedata.skills.map((item, index) => (
                                        <li key={index}>
                                            <FiCheckSquare />
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
                                <p><strong>No. of Posts : 3</strong></p>
                                <a href="#sec2" class="button2" >Apply Now <span><ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} /></span></a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
