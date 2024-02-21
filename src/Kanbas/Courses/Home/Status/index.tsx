
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3, HiChevronRight } from "react-icons/hi2";
import {FaCheck, FaCheckCircle } from "react-icons/fa";

import "../index.css"
function Status() {

    return (
  
   
   <div className="flex-grow-0 me-2 d-none d-lg-block" style={{width: 250}}>
              <br/>
              <h4>Course Status</h4>
              <hr/>
              <div className="status-buttons">
                  <div className="half">
                      <button>Unpublish</button>
                  </div>
                  <div className="half">
                      <button><FaCheckCircle  style={{color:"green"}} />Publish</button>
                  </div>
              </div>
              <div >
                  <button className="status"><a href="/Kanbas/Courses/Home/index.html">Import Existing Content</a></button>
                  <button className="status"><a href="/Kanbas/Courses/Home/index.html">Import Existing Commons</a></button>
                  <button className="status"><a href="/Kanbas/Courses/Home/index.html">Choose Home Page</a></button>
                  <button className="status"><a href="/Kanbas/Courses/Home/index.html">View Course Stream</a></button>
                  <button className="status"><a href="/Kanbas/Courses/Home/index.html">New Announcement</a></button>
                  <button className="status"><a href="/Kanbas/Courses/Home/index.html">New Analytics</a></button>
                  <button className="status"><a href="/Kanbas/Courses/Home/index.html">View Course Notification</a></button>
              </div>
              <br/>
              <div className="coming-up">
                <div>
              <h4>Coming Up</h4>
                </div>
            
                <div className="wd-float-right">
                <a href="/Kanbas/Courses/Home/index.html">View Calendar</a>
               </div>
              
              </div>
              <hr/>
             
              <ul className="lectures">
                  <li><a href="/Kanbas/Courses/Home/index.html"> <i className="fa fa-calendar"></i> &nbsp;Lecture CS4550.12631 11:45am</a></li>
                  <li><a href="/Kanbas/Courses/Home/index.html"> <i className="fa  fa-calendar"></i>&nbsp;Lecture CS4550.12631 1:35pm</a></li>
                  <li><a href="/Kanbas/Courses/Home/index.html"> <i className="fa  fa-calendar"></i>&nbsp;Lecture CS4550.12631 6pm</a></li>
              </ul>
            </div>

      )};
        export default Status;