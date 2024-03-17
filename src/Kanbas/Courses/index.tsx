import { Navigate, Route, Routes, useParams} from "react-router-dom";
import { HiMiniBars3, HiChevronRight } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import BreadCrumbs from "./BreadCrumbs";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


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
              <li><a href="/Kanbas/Account/Navigation/screen.html"> <i className="fa fa-user"></i> Account</a></li>
              <li><a href="/Kanbas/Dashboard/screen.html"> <i className="fa fa-tachometer"></i>Dashboard</a></li>
              <li><a href="/Kanbas/Courses/Home/screen.html"> <i className="fa fa-book"></i>Courses</a></li>
              <li ><a href="/Kanbas/Calendar/screen.html"> <i className="fa fa-calendar"></i> Calendar</a></li>
              <li><a href="/Kanbas/Inbox/screen.html"><i className="fa fa-envelope"></i> Inbox </a></li>
              <li><a href="/Kanbas/History/screen.html"><i className="fa fa-history" aria-hidden="true"></i>
                History</a></li>
              <li><a href="/Kanbas/Studio/screen.html"><i className="fa fa-tv"></i> Studio</a></li>
              <li><a href="/Kanbas/Commons/screen.html"> <i className="fa fa-backward"></i> Commons</a></li>
              <li><a href="/Kanbas/Help/screen.html"> <i className="fa fa-question-circle" aria-hidden="true"></i>
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
                    <i className="fa fa-home"></i>Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Home/screen.html">
                  <i className="fa fa-window-restore"></i> Modules</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Piazza/index.html">
                  <i className="fa fa-plug"></i>Piazza</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Zoommeetings/screen.html">
                  <i className="fa fa-plug"></i>Zoom Meetings</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Assignments/screen.html"><i className="fa fa-sticky-note-o"></i>Assignments</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Quizzes/screen.html"><i className="fa fa-rocket"></i>Quizzes</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Grades/screen.html"><i className="fa fa-check-square"></i>Grades</a></li>
    
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/People/screen.html"><i className="fa fa-users"></i>People</a></li>
    
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Panoptovideo/screen.html"><i className="fa fa-video-camera"></i>Panopto Video</a></li>
    
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Discussions/screen.html"><i className="fa fa-comment"></i>Discussions</a></li>
    
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Announcements/screen.html"><i className="fa fa-microphone"></i>Announcements</a></li>
    
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Pages/screen.html"><i className="fa fa-file-text"></i>Pages</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Files/screen.html"><i className="fa fa-folder"></i>Files</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Rubrics/screen.html"><i className="fa fa-clipboard"></i>Rubrics</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Outcomes/screen.html"><i className="fa fa-bullseye"></i>Outcomes</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Collaborations/screen.html"><i className="fa fa-circle-thin"></i>Collaborations</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Syllabus/screen.html"><i className="fa fa-address-book-o"></i>Syllabus</a></li>
                <li className="nav-item"><a className="nav-link" href="/Kanbas/Courses/Settings/screen.html"><i className="fa fa-cog"></i>Settings</a></li>
    
            </ul>
          </div>
        
        </nav>
          
   
        
      <BreadCrumbs />
      <hr style={{ marginLeft: 10, paddingBottom: 10 }} />
      <div className="d-flex" >
      <div className="d-none d-md-block ">
       <CourseNavigation />
      </div>
  
        <div
          // style={{ left: "320px", top: "90px" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules />} />
            {/* <Route path="Piazza" element={<h1>Piazza</h1>} /> */}
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
