import React from 'react'
import { FaCircleNotch} from "react-icons/fa";
import {LiaDotCircleSolid} from "react-icons/lia"

import data from "../data";
import Header from '../components/header/Header';
import FooterThree from '../components/footerTwo/FooterThree';
import Cards from '../components/cards/Cards';
function CareerTwo() {



    return (
        <div>
            <Header/>

            <section class="main" id="main">
                <div class="cms-block same-gap">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="urgent-opening">
                                    <span> <strong> Urgent Opening: </strong> <LiaDotCircleSolid/> Full Stack .Net Developer  
                                    <LiaDotCircleSolid/> Laravel with Vue Js Developer.</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="career-text">
                                    <h3 class="heading"><span> We are </span> Hiring</h3>
                                    <p>At Minivet System, we encourage professionalism mixed with fun and creativity to enhance and elevate an individual's career growth. We enjoy our work and are passionate about it. We initiate our own ideas and we nurture our own dreams. Everyone at Minivet System shares a common vision - of building great web applications for a global spectator that enable users worldwide to live in the Internet.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="career-text">
                                    <h3 class="heading"><span>Key to </span> Join Us</h3>
                                    <ul>
                                        <li>
                                            <FaCircleNotch /> Unlimited opportunity of working with
                                            different technologies
                                        </li>
                                        <li>
                                            <FaCircleNotch /> Enjoy a culture of openness with strong
                                            values
                                        </li>
                                        <li>
                                            <FaCircleNotch /> We encourge to learn and keep yourself
                                            upgraded
                                        </li>
                                        <li>
                                            <FaCircleNotch /> Grow in an atmosphere of excellence and
                                            team spirit
                                        </li>
                                        <li>
                                            <FaCircleNotch /> Best practices of HR policies
                                        </li>
                                    </ul>
                                </div>
                            </div>
                         
                                </div>
                            </div>
                        </div>
                        {/* <div class="modal fade bs-example-modal-md" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog modal-md" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h2>Apply For A Job</h2>
                                        <form class="form-horizontal">
                                            <div class="form-group mar15">
                                                <div class="col-sm-6">
                                                    <label><i class="fa fa-user" aria-hidden="true"></i> Full Name</label>
                                                    <input type="text" class="form-control" placeholder="Full Name">
                                                </div>
                                                <div class="col-sm-6">
                                                    <label><i class="fa fa-envelope" aria-hidden="true"></i> Email Address</label>
                                                    <input type="email" class="form-control" placeholder="Email">
                                                </div>
                                            </div>
                                            <div class="form-group mar15">
                                                <div class="col-sm-6">
                                                    <label><i class="fa fa-briefcase" aria-hidden="true"></i> Select Position</label>
                                                    <select class="form-control">
                                                        <option>Select Your Position</option>
                                                        <option>Senior .Net developer</option>
                                                        <option>Full Stack Developer</option>
                                                        <option>Senior PHP Developer</option>
                                                        <option>Junior PHP Developer</option>
                                                        <option>Drupal Developer</option>
                                                        <option>Node JS Developer</option>
                                                        <option>Senior Angular Developer</option>
                                                        <option>Senior Moodle Developer</option>
                                                        <option>Core Java Developer</option>
                                                        <option>Hybrid Mobile App Developers</option>
                                                        <option>IOS Developers</option>
                                                        <option>Android Developers</option>
                                                        <option>Online Bidder</option>
                                                        <option>Business Development Executive</option>
                                                        <option>HR Executive</option>
                                                        <option>SEO Executive</option>
                                                        <option>Python Developer</option>
                                                    </select>
                                                </div>
                                                <div class="col-sm-6">
                                                    <label><i class="fa fa-sticky-note" aria-hidden="true"></i> Upload your CV</label>
                                                    <input type="file" class="form-control">
                                                </div>
                                            </div>
                                            <div class="form-group mar15">
                                                <div class="col-sm-12">
                                                    <label><i class="fa fa-send" aria-hidden="true"></i> Message</label>
                                                    <textarea class="form-control" placeholder="Type your text"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-sm-12">
                                                    <button type="submit" class="button2">Submit <span><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div class="block7 same-gap">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="text-center same-gap">
                                            <h3>Job Opportunities</h3>
                                            <h2>Click here to select Your Job Role</h2>
                                        </div>
                                    </div>
                                </div>
                                <Cards/>
                            </div>
                        </div>
                    </section>

                    <FooterThree/>
                </div>
                )
}

                export default CareerTwo
