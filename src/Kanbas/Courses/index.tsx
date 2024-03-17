import { Navigate, Route, Routes, useParams} from "react-router-dom";
import {HiMiniBars3, HiChevronRight, HiUser, HiMiniAdjustmentsHorizontal,HiBookOpen,HiCalendar,HiEnvelope, HiClock,HiTv,HiBackward, HiQuestionMarkCircle, HiHome, HiMiniWindow, HiVideoCamera, HiClipboard, HiBanknotes, HiRocketLaunch, HiSquaresPlus, HiVideoCameraSlash, HiChatBubbleLeft, HiMicrophone, HiPaperClip, HiFolder, HiClipboardDocument, HiArrowRightCircle, HiCircleStack, HiBookmarkSquare, HiBookmark, HiCog} from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import BreadCrumbs from "./BreadCrumbs";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'

function Courses({ courses }: { courses: any[]; }) {
  const { courseId, pages } = useParams();
  const course = courses.find((course) => course._id === courseId);
  console.log(pages);
 
  return (
    
      <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark d-md-none">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span><HiMiniBars3/></span>

          </button>
          

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="wd-navigation">
              <li><a href="/Kanbas/Account/Navigation/screen.html"> <HiUser/> Account</a></li>
              <li><a href="/Kanbas/Dashboard/screen.html"> <HiMiniAdjustmentsHorizontal/>Dashboard</a></li>
              <li><a href="/Kanbas/Courses/Home/screen.html"> <HiBookOpen/>Courses</a></li>
              <li ><a href="/Kanbas/Calendar/screen.html"> <HiCalendar/> Calendar</a></li>
              <li><a href="/Kanbas/Inbox/screen.html"><HiEnvelope/> Inbox </a></li>
              <li><a href="/Kanbas/History/screen.html"><HiClock/>
                History</a></li>
              <li><a href="/Kanbas/Studio/screen.html"><HiTv/> Studio</a></li>
              <li><a href="/Kanbas/Commons/screen.html"> <HiBackward/> Commons</a></li>
              <li><a href="/Kanbas/Help/screen.html"> <HiQuestionMarkCircle/>
                Help</a></li>
      
            </ul>
          </div>



          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCourseNavigation" aria-controls="navbarCourseNavigation" aria-expanded="false" aria-label="Toggle navigation">
            <span ><HiChevronRight/></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCourseNavigation">
            <ul className="navbar-nav">
              <li className="nav-item active">
                  <a className="nav-link" href="/Kanbas/Courses/Home/screen.html">
                    <HiHome/>Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Home/screen.html">
                  <HiMiniWindow/> Modules</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Piazza/index.html">
                  <HiClipboard/>Piazza</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Zoommeetings/screen.html">
                  <HiVideoCamera/>Zoom Meetings</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Assignments/screen.html"><HiBanknotes/>Assignments</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Quizzes/screen.html"><HiRocketLaunch/>Quizzes</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Grades/screen.html"><HiSquaresPlus/>Grades</a></li>
    
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/People/screen.html"><HiUser/>People</a></li>
    
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Panoptovideo/screen.html"><HiVideoCameraSlash/>Panopto Video</a></li>
    
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Discussions/screen.html"><HiChatBubbleLeft/>Discussions</a></li>
    
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Announcements/screen.html"><HiMicrophone/>Announcements</a></li>
    
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Pages/screen.html"><HiPaperClip/>Pages</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Files/screen.html"><HiFolder/>Files</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Rubrics/screen.html"><HiClipboardDocument/>Rubrics</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Outcomes/screen.html"><HiArrowRightCircle/>Outcomes</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Collaborations/screen.html"><HiCircleStack/>Collaborations</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Syllabus/screen.html"><HiBookmark/>Syllabus</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Settings/screen.html"><HiCog/>Settings</a></li>
    
            </ul>
          </div>
        
        </nav>
          
   
        
      <BreadCrumbs />
      <hr style={{ marginLeft: 10, paddingBottom: 10 }} />
      <div className="d-flex" >
      <div className="d-none d-md-block ">
       <CourseNavigation />
      </div>
  
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
        </div>
    </div>

  );
}
export default Courses;
